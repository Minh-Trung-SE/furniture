import {CustomYAxisTick} from "common/Rechart/CustomYAxisTick";
import {RoundedTopBarFill} from "common/Rechart/RoundedTopBarFill";
import {Bar, CartesianGrid, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis,} from 'recharts';


const data = [
    {
        label: 'Jan',
        new: 565,
        solved: 454,
        overdue: 320,
    },
    {
        label: 'Feb',
        new: 189,
        solved: 551,
        overdue: 68,
    },
    {
        label: 'Mar',
        new: 430,
        solved: 300,
        overdue: 150,
    },
    {
        label: 'Apr',
        new: 571,
        solved: 583,
        overdue: 230,
    },
    {
        label: 'May',
        new: 452,
        solved: 700,
        overdue: 200,
    },
    {
        label: 'Jun',
        new: 438,
        solved: 268,
        overdue: 160,
    },
    {
        label: 'Jul',
        new: 675,
        solved: 170,
        overdue: 100,
    },
    {
        label: 'Aug',
        new: 735,
        solved: 541,
        overdue: 200,
    },
    {
        label: 'Sep',
        new: 479,
        solved: 741,
        overdue: 250,
    },
    {
        label: 'Oct',
        new: 548,
        solved: 421,
        overdue: 110,
    },
    {
        label: 'Nov',
        new: 261,
        solved: 621,
        overdue: 100,
    },
    {
        label: 'Dec',
        new: 757,
        solved: 661,
        overdue: 80,
    },
];
const COLORS = ['#7928ca', '#10b981', '#eab308'];
const OrderBar = () => {

    // const [statistics, setStatistics] = useCallAPIState(
    //     {
    //         status: CALL_API_STATUS.IDLE,
    //         data: {
    //             total: 0,
    //             completed: 0,
    //             processing: 0,
    //             pending: 0,
    //             cancelled: 0,
    //         }
    //     }
    // )
    //
    // const fetchData = useCallback(
    //     async () => {
    //         setStatistics(CALL_API_STATUS.LOADING)
    //         const {success, payload} = await StatisticsService.getOrder()
    //         if (success){
    //             setStatistics(CALL_API_STATUS.SUCCESS, payload!)
    //         }
    //     }, [setStatistics]
    // )
    //
    // useEffect(
    //     () => {
    //         fetchData()
    //     },[fetchData]
    // )
    // const data = useMemo(
    //     () => (
    //         [
    //             {
    //                 id: 1,
    //                 title: 'Total Completed',
    //                 metric: statistics.data.completed,
    //                 fill: '#59b259',
    //                 percentage: calculatePercentage(statistics.data.completed, statistics.data.total),
    //                 increased: true,
    //                 decreased: false,
    //                 value: '+32.40',
    //             },
    //             {
    //                 id: 2,
    //                 title: 'Total Pending',
    //                 metric: statistics.data.pending,
    //                 fill: '#077a88',
    //                 percentage: calculatePercentage(statistics.data.pending, statistics.data.total),
    //                 increased: true,
    //                 decreased: false,
    //                 value: '+32.40',
    //             },
    //             {
    //                 id: 3,
    //                 title: 'Total Processing',
    //                 metric: statistics.data.processing,
    //                 fill: '#3872FA',
    //                 percentage: calculatePercentage(statistics.data.processing, statistics.data.total),
    //                 increased: false,
    //                 decreased: true,
    //                 value: '-18.45',
    //             },
    //             {
    //                 id: 4,
    //                 title: 'Total Cancelled',
    //                 metric: statistics.data.cancelled,
    //                 fill: '#EE0000',
    //                 percentage: calculatePercentage(statistics.data.cancelled, statistics.data.total),
    //                 increased: true,
    //                 decreased: false,
    //                 value: '+20.34',
    //             },
    //         ]
    //     ), [statistics.data]
    // )

    return (
        <div className="p-5 space-y-5 border rounded shadow">

            <h2 className="text-lg font-semibold">Order Statistics</h2>

            <div  className="h-80 w-full">
                <ResponsiveContainer
                   width="100%"
                   height="100%"
                >
                    <ComposedChart
                        data={data}
                        className="[&_.recharts-tooltip-cursor]:fill-opacity-20 dark:[&_.recharts-tooltip-cursor]:fill-opacity-10 [&_.recharts-cartesian-axis-tick-value]:fill-gray-500 [&_.recharts-cartesian-axis.yAxis]:-translate-y-3 rtl:[&_.recharts-cartesian-axis.yAxis]:-translate-x-12"
                    >
                        <CartesianGrid
                            vertical={false}
                            strokeOpacity={0.435}
                            strokeDasharray="8 10"
                        />
                        <XAxis dataKey="label" axisLine={false} tickLine={false}/>
                        <YAxis
                            width={50}
                            axisLine={false}
                            tickLine={false}
                            tick={<CustomYAxisTick />}
                        />
                        <Tooltip
                            cursor={false}
                        />
                        <Bar
                            dataKey="new"
                            fill={COLORS[0]}
                            barSize={28}
                            shape={<RoundedTopBarFill />}
                        />
                        <Bar
                            type="natural"
                            dataKey="solved"
                            fill={COLORS[1]}
                            barSize={28}
                            shape={<RoundedTopBarFill/>}
                        />
                        <Line
                            type="natural"
                            dataKey="overdue"
                            stroke={COLORS[2]}
                            dot={false}
                            strokeWidth={2}
                        />
                    </ComposedChart>
                </ResponsiveContainer>

            </div>

        </div>
    );
};

export default OrderBar;