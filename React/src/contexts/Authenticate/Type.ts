import {AUTHENTICATE_STATUS} from "shared/contexts/Authenticate/Enum.ts";
import {Authenticated, Authorized} from "shared/types/Authenticate.ts";

export type Status = typeof AUTHENTICATE_STATUS [keyof typeof AUTHENTICATE_STATUS]

export type AuthenticateState = {
    status: Status
    message: string
    authenticated?: Authenticated
    authorized?: Authorized
}