const {JsonResult} = require("@helpers/JsonResult");
const {HTTP_CODE} = require("@helpers/HttpStatus");
const {Order} = require("@models/Order/OrderModel");
const {isArray} = require("lodash");

class StatisticService {

    static async orderStatistic() {
        const orders = await Order.findAll()

        const statistic = orders.reduce(
            (statistic, order) => {
                statistic.total += 1
                if (order.status === "PENDING") {
                    statistic.pending += 1
                    return statistic
                }

                if (order.status === "COMPLETED") {
                    statistic.completed += 1
                    return statistic
                }

                if (order.status === "CANCELED") {
                    statistic.cancelled += 1
                    return statistic
                }

                statistic.processing += 1
                return statistic
            },
            {
                total: 0,
                pending: 0,
                completed: 0,
                cancelled: 0,
                processing: 0
            }
        )


        return JsonResult.builder(
            HTTP_CODE.OK,
            HTTP_CODE.OK,
            statistic,
            "Order statistic successfully fetched."
        )
    }

    static async orderStatisticGroupByDate() {
        const orders = await Order.findAll().then(
            (orders) => orders.reduce(
                (statistic, order) => {
                    const month = new Date(order.getDataValue("createdAt")).toLocaleString('default', { month: 'short' })
                    if (isArray(statistic[month])) {
                        statistic[month].push(order.toJSON())
                        return statistic
                    }
                    statistic[month] = [order.toJSON()]
                    return statistic
                },
                {}
            )
        )

        const data = Object.keys(orders).reduce(
            (statistic, month) => {
                statistic[month] = orders[month].reduce(
                    (statistic, order) => {
                        statistic.total += 1
                        if (order.status === "PENDING") {
                            statistic.pending += 1
                            return statistic
                        }

                        if (order.status === "COMPLETED") {
                            statistic.completed += 1
                            return statistic
                        }

                        if (order.status === "CANCELED") {
                            statistic.cancelled += 1
                            return statistic
                        }

                        statistic.processing += 1
                        return statistic
                    },
                    {
                        label: month,
                        total: 0,
                        pending: 0,
                        completed: 0,
                        cancelled: 0,
                        processing: 0
                    }
                )
                return statistic
            },
            {}
        )


        return JsonResult.builder(
            HTTP_CODE.OK,
            HTTP_CODE.OK,
            Object.values(data),
            "Order statistic successfully fetched."
        )
    }
}

module.exports = {
    StatisticService
}