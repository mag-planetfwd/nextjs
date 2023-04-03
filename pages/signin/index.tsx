import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useUser, useSupabaseClient, Session } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'
import { Database } from '../../types/supabase'
type TestData = Database['public']['Tables']['test']['Row']


export default function SignIn({ session }: { session: Session }) {
    const supabase = useSupabaseClient<Database>()
    const user = useUser()
    const [data, setData] = useState<TestData['name']>()

    useEffect(() => {
        getTestData()
    }, [session])

    async function getTestData() {
        const { data } = await supabase.from('test').select('name').single()
        setData(data?.name)
    }

    if (!user)
        return (
            <Auth
                redirectTo={process.env.REDIRECT_URL}
                appearance={{ theme: ThemeSupa }}
                supabaseClient={supabase}
                providers={['google']}
                socialLayout="horizontal"
            />
        )

    return (
        <>
            <button onClick={() => supabase.auth.signOut()}>Sign out</button>
            <p>user:</p>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <p>client-side data fetching with RLS</p>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    )
}
