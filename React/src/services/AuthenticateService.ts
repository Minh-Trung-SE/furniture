import interceptor from "apis/Interceptor";
import {requestApiHelper} from "helpers/Request";
import {Authenticated} from "types/Authenticate";


class AuthenticateService {

    static async login(payload: {
        email: string,
        password: string
    }) {
        return await requestApiHelper(
            interceptor.post(
                "login",
                payload,
                {
                    withCredentials: true
                }
            )
        )
    }

    static async register(payload: { email: string, password: string, displayName: string }) {
        return await requestApiHelper(
            interceptor.post("register", payload)
        )
    }

    static getCredential() {
        return requestApiHelper<Authenticated>(
            interceptor.get(
                "credential"
            )
        )
    }
}

export default AuthenticateService