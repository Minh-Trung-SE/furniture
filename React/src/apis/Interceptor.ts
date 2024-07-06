import axios, {AxiosError, InternalAxiosRequestConfig} from "axios";
import {CONTENT_TYPE} from "shared/constants/HTTP.ts";
import {decryptWithAES, encryptWithAES, hexRandom, publicEncrypt} from "shared/utils/AES.ts";
import {isEmpty, isObject, isString} from "lodash";

const interceptor = axios.create({
    baseURL: import.meta.env.VITE_API,
    headers: {
        "Content-Type": CONTENT_TYPE.APPLICATION_JSON,
        "Encrypted": "true"
    },
});

const onRequest = (
    config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = token;
    }

    if (config.headers.get("Encrypted") !== "true") {
        return config;
    }

    const sessionKey = hexRandom(32)

    config.transformRequest = (data, headers) => {
        if (isObject(data) && headers.get("Content-Type") === CONTENT_TYPE.APPLICATION_JSON) {
            const sessionKeyEncrypted = publicEncrypt(sessionKey);

            return JSON.stringify(
                {
                    label: sessionKeyEncrypted,
                    data: encryptWithAES(JSON.stringify(data), sessionKey)
                }
            )
        }
        return data
    }

    config.transformResponse = (data) => {
        if (isEmpty(data)) {
            return data
        }
        if(isString(data) && data.startsWith("{")&&  data.endsWith("}")){
            return JSON.parse(data)
        }

        return JSON.parse(
            decryptWithAES(
                data,
                sessionKey
            )
        )
    }

    return config;
};

const onErrorResponse = (error: AxiosError | Error) => {
    throw error;
};

interceptor.interceptors.request.use(onRequest);
interceptor.interceptors.response.use(null, onErrorResponse);

export default interceptor;
