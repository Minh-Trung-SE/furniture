import interceptor from "apis/Interceptor";
import {requestApiHelper} from "helpers/Request";

class StatisticsService {

    static async getOrder<T = {total: number, pending: number, processing: number, cancelled: number, completed: number}>() {
        return await requestApiHelper<T, T>(
            interceptor.get(
                "statistics/order"
            )
        )
    }

    static async getOrderByDate<T>() {
        return await requestApiHelper<T, T>(
            interceptor.get(
                "statistics/order/date"
            )
        )
    }

}

export default StatisticsService