import {AUTHENTICATE_STATUS} from "contexts/Authenticate/Enum.ts";
import {Authenticated} from "types/Authenticate.ts";

export type Status = typeof AUTHENTICATE_STATUS [keyof typeof AUTHENTICATE_STATUS]

export type AuthenticateState = {
    status: Status
    message: string
    authenticated?: Authenticated
}