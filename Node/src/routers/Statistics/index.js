const {wrapperAsyncHandler} = require("@helpers/ErrorWrapper");
const {authenticate} = require("@middleware/Authenticate");
const {StatisticsController} = require("@controllers/StatisticsController");
const router = require("express").Router()

router.get(
    "/statistics/order",
    authenticate,
    wrapperAsyncHandler(StatisticsController.getOrderStatistics)
)

module.exports = router