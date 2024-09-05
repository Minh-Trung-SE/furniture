const {JsonResult} = require("@helpers/JsonResult");
const {HTTP_CODE} = require("@helpers/HttpStatus");
const {Order} = require("@models/Order/OrderModel");

class StatisticService {

    static async orderStatistic() {
        const orders = await Order.findAll(

        )

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
}

module.exports = {
    StatisticService
}