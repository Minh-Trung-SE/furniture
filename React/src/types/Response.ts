import {AxiosResponse} from "axios";

export type ResponseBase<D = any, M = any> = {
    error: false
    success: true
    code: number
    httpStatus: number
    message: string,
    payload: D
    meta: M
    original: AxiosResponse<D, M>
} | {
    error: true
    success: false
    code?: any
    httpStatus?: any
    message?: any
    payload?: any
    meta?: any
    original?: any
    errorDetail?: unknown | any
}