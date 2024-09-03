import CircleProgressBar from "common/Chart/CircleProgressBar";
import {nanoid} from "nanoid/non-secure";
import React from 'react';

const OrderStatistics = () => {
    return (
        <div className="grid grid-cols-3 gap-5">
            {
                [
                    {
                        id: 1,
                        title: 'Total Images',
                        metric: '36,476 GB',
                        fill: '#3872FA',
                        percentage: 32,
                        increased: true,
                        decreased: false,
                        value: '+32.40',
                    },
                    {
                        id: 2,
                        title: 'Total Videos',
                        metric: '53,406 GB',
                        fill: '#3872FA',
                        percentage: 48,
                        increased: false,
                        decreased: true,
                        value: '-18.45',
                    },
                    {
                        id: 3,
                        title: 'Total Documents',
                        metric: '90,875 GB',
                        fill: '#EE0000',
                        percentage: 89,
                        increased: true,
                        decreased: false,
                        value: '+20.34',
                    },
                ].map(
                    item => (
                        <div key={nanoid()} className="border rounded p-5 flex">
                            <div className="grow flex flex-col justify-between">
                                <p className="text-gray-400 font-medium text-lg">{item.title}</p>
                                <p className="text-2xl font-semibold">53,406 GB</p>

                            </div>
                            <div className="flex-none h-20 w-20">
                                <CircleProgressBar
                                    percentage={item.percentage}
                                    size={80}
                                    stroke="#D7E3FE"
                                    strokeWidth={7}
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