import { ResponsiveBar } from '@nivo/bar'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
    {
        "country": "AD",
        "hot dog": 124,
        "hot dogColor": "hsl(111, 70%, 50%)",
        "burger": 103,
        "burgerColor": "hsl(12, 70%, 50%)",
        "sandwich": 143,
        "sandwichColor": "hsl(351, 70%, 50%)",
        "kebab": 154,
        "kebabColor": "hsl(317, 70%, 50%)",
        "fries": 193,
        "friesColor": "hsl(253, 70%, 50%)",
        "donut": 90,
        "donutColor": "hsl(54, 70%, 50%)"
    },
    {
        "country": "AE",
        "hot dog": 129,
        "hot dogColor": "hsl(30, 70%, 50%)",
        "burger": 155,
        "burgerColor": "hsl(70, 70%, 50%)",
        "sandwich": 45,
        "sandwichColor": "hsl(27, 70%, 50%)",
        "kebab": 114,
        "kebabColor": "hsl(336, 70%, 50%)",
        "fries": 151,
        "friesColor": "hsl(231, 70%, 50%)",
        "donut": 5,
        "donutColor": "hsl(97, 70%, 50%)"
    },
    {
        "country": "AF",
        "hot dog": 5,
        "hot dogColor": "hsl(262, 70%, 50%)",
        "burger": 143,
        "burgerColor": "hsl(171, 70%, 50%)",
        "sandwich": 47,
        "sandwichColor": "hsl(180, 70%, 50%)",
        "kebab": 121,
        "kebabColor": "hsl(94, 70%, 50%)",
        "fries": 138,
        "friesColor": "hsl(353, 70%, 50%)",
        "donut": 20,
        "donutColor": "hsl(35, 70%, 50%)"
    },
    {
        "country": "AG",
        "hot dog": 85,
        "hot dogColor": "hsl(219, 70%, 50%)",
        "burger": 150,
        "burgerColor": "hsl(83, 70%, 50%)",
        "sandwich": 107,
        "sandwichColor": "hsl(316, 70%, 50%)",
        "kebab": 46,
        "kebabColor": "hsl(155, 70%, 50%)",
        "fries": 181,
        "friesColor": "hsl(355, 70%, 50%)",
        "donut": 137,
        "donutColor": "hsl(328, 70%, 50%)"
    },
    {
        "country": "AI",
        "hot dog": 82,
        "hot dogColor": "hsl(5, 70%, 50%)",
        "burger": 72,
        "burgerColor": "hsl(348, 70%, 50%)",
        "sandwich": 47,
        "sandwichColor": "hsl(257, 70%, 50%)",
        "kebab": 130,
        "kebabColor": "hsl(304, 70%, 50%)",
        "fries": 186,
        "friesColor": "hsl(314, 70%, 50%)",
        "donut": 17,
        "donutColor": "hsl(56, 70%, 50%)"
    },
    {
        "country": "AL",
        "hot dog": 59,
        "hot dogColor": "hsl(236, 70%, 50%)",
        "burger": 99,
        "burgerColor": "hsl(155, 70%, 50%)",
        "sandwich": 174,
        "sandwichColor": "hsl(219, 70%, 50%)",
        "kebab": 110,
        "kebabColor": "hsl(134, 70%, 50%)",
        "fries": 33,
        "friesColor": "hsl(275, 70%, 50%)",
        "donut": 183,
        "donutColor": "hsl(29, 70%, 50%)"
    },
    {
        "country": "AM",
        "hot dog": 103,
        "hot dogColor": "hsl(130, 70%, 50%)",
        "burger": 0,
        "burgerColor": "hsl(14, 70%, 50%)",
        "sandwich": 166,
        "sandwichColor": "hsl(115, 70%, 50%)",
        "kebab": 149,
        "kebabColor": "hsl(246, 70%, 50%)",
        "fries": 164,
        "friesColor": "hsl(155, 70%, 50%)",
        "donut": 128,
        "donutColor": "hsl(131, 70%, 50%)"
    }
]

export default function BarChart() {
    return (
        <ResponsiveBar
            data={data}
            keys={[
                'hot dog',
                'burger',
                'sandwich',
                'kebab',
                'fries',
                'donut'
            ]}
            layout="horizontal"
            indexBy="country"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'fries'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'sandwich'
                    },
                    id: 'lines'
                }
            ]}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'country',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'food',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={function (e) {
                return e.id + ": " + e.formattedValue + " in country: " + e.indexValue
            }}
        />
    );
}
