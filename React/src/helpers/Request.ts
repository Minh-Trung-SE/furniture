import {AxiosError, AxiosResponse} from "axios";
import {ResponseBase} from "shared/types/Response.ts";

export const requestApiHelper = async <D = any, M = any>(promise: Promise<AxiosResponse<ResponseBase<D, M>>>): Promise<ResponseBase<D, M>> => {
    try {
        const { data } = await promise
        return data
    } catch (error) {
        if(error instanceof AxiosError){
            return {
                error: true,
                success: false,
                errorDetail: error,
                code: error?.response?.data.code,
                httpStatus: error?.response?.status,
                payload: error?.response?.data.payload,
            }
        }
        return {
            error: true,
            success: false,
            errorDetail: error
        }
    }
}