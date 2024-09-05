const {StatisticService} = require("@services/StatisticService");

class StatisticsController {
    /*
     * @param {import("express").Request} request
     * @param {import("express").Response} response
     */
    static async getOrderStatistics(request, response) {
        (await StatisticService.orderStatistic()).send(response)
    }

}

module.exports = {
    StatisticsController
}