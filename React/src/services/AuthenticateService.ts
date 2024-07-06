import {AuthenticateState} from "shared/contexts/Authenticate";
import {requestApiHelper} from "shared/helpers/Request";
import interceptor from "shared/apis/Interceptor";


class AuthenticateService {
    static async getSessionNOC() {
        return await requestApiHelper<{session: string}>(
            interceptor.get("session-noc")
        )
    }
    static async getCredential() {
        return await requestApiHelper<AuthenticateState>(
            interceptor.get("credential")
        )
    }

    static async login<T = { accessToken: string, expiredAt: string, user: any }>(payload: {
        username: string,
        password: string
    }) {
        return await requestApiHelper<T>(
            interceptor.post(
                "login",
                payload,
                {
                    withCredentials: true
                }
            )
        )
    }

    static async verifyTwoFactor<T = { accessToken: string, expiredAt: string, user: any }>(payload: {
        username: string,
        password: string,
        otp: string
    }) {
        return await requestApiHelper<T>(
            interceptor.post("verify-totp", payload)
        )
    }

    static async activeAccount<T = { accessToken: string, expiredAt: string, user: any }>(payload: {
        username: string,
        password: string,
        otp: string
    }) {
        return await requestApiHelper<T>(
            interceptor.post("active-account", payload)
        )
    }

    static async changePassword(payload: { currentPassword: string, password: string }) {
        return await requestApiHelper(
            interceptor.put("change-password", payload)
        )
    }

    static async enableTwoFactor<T = { secret: string }>(payload: { password: string }) {
        return await requestApiHelper<T>(
            interceptor.post("two-factor", payload)
        )
    }

    static async verifyEnableTwoFactor<T = any>(payload: { otp: string, password: string }) {
        return await requestApiHelper<T>(
            interceptor.put("two-factor", payload)
        )
    }

    static async disableTwoFactor<T = any>(payload: { otp: string, password: string }) {
        return await requestApiHelper<T>(
            interceptor.delete("two-factor", {data: payload})
        )
    }
}

export default AuthenticateService