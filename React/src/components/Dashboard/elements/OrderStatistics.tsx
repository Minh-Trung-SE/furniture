import CircleProgressBar from "common/Chart/CircleProgressBar";
import useCallAPIState, {CALL_API_STATUS} from "hooks/UseCallAPIState";
import {nanoid} from "nanoid/non-secure";
import {useCallback, useEffect, useMemo} from "react";
import StatisticsService from "services/StatisticsService";
import {calculatePercentage} from "utils/Number";

const OrderStatistics = () => {

    const [statistics, setStatistics] = useCallAPIState(
        {
            status: CALL_API_STATUS.IDLE,
            data: {
                total: 0,
                completed: 0,
                processing: 0,
                pending: 0,
                cancelled: 0,
            }
        }
    )

    const fetchData = useCallback(
        async () => {
            setStatistics(CALL_API_STATUS.LOADING)
            const {success, payload} = await StatisticsService.getOrder()
            if (success){
                setStatistics(CALL_API_STATUS.SUCCESS, payload!)
            }
        }, [setStatistics]
    )

    useEffect(
        () => {
            fetchData()
        },[fetchData]
    )
    const data = useMemo(
        () => (
            [
                {
                    id: 1,
                    title: 'Total Completed',
                    metric: statistics.data.completed,
                    fill: '#59b259',
                    percentage: calculatePercentage(statistics.data.completed, statistics.data.total),
                    increased: true,
                    decreased: false,
                    value: '+32.40',
                },
                {
                    id: 2,
                    title: 'Total Pending',
                    metric: statistics.data.pending,
                    fill: '#077a88',
                    percentage: calculatePercentage(statistics.data.pending, statistics.data.total),
                    increased: true,
                    decreased: false,
                    value: '+32.40',
                },
                {
                    id: 3,
                    title: 'Total Processing',
                    metric: statistics.data.processing,
                    fill: '#3872FA',
                    percentage: calculatePercentage(statistics.data.processing, statistics.data.total),
                    increased: false,
                    decreased: true,
                    value: '-18.45',
                },
                {
                    id: 4,
                    title: 'Total Cancelled',
                    metric: statistics.data.cancelled,
                    fill: '#EE0000',
                    percentage: calculatePercentage(statistics.data.cancelled, statistics.data.total),
                    increased: true,
                    decreased: false,
                    value: '+20.34',
                },
            ]
        ), [statistics.data]
    )

    return (
        <div className="grid grid-cols-4 gap-5">
            {
                data.map(
                    item => (
                        <div
                            key={nanoid()}
                            className="border rounded p-5 flex"
                        >
                            <div className="grow flex flex-col justify-between">
                                <p className="text-gray-400 font-medium text-lg">{item.title}</p>
                                <p className="text-2xl font-semibold">{item.metric} package</p>
                            </div>
                            <div className="flex-none h-20 w-20">
                                <CircleProgressBar
                                    percentage={item.percentage}
                                    size={80}
                                    stroke="#D7E3FE"
                                    strokeWidth={10}
                                    progressColor={item.fill}
                                    useParentResponsive={true}
                                    label={
                                        <span
                                            className="font-lexend text-base font-medium text-gray-700"
                                        >
                                            {item.percentage}%
                                        </span>
                                    }
                                    strokeClassName="dark:stroke-gray-300"
                                />
                            </div>
                        </div>
                    )
                )
            }
        </div>
    );
};

export default OrderStatistics;