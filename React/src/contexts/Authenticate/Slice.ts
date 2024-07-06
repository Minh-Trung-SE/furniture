import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AUTHENTICATE_STATUS} from "shared/contexts/Authenticate/Enum.ts";
import {loadCredential} from "shared/contexts/Authenticate/Mindleware.ts";
import {AuthenticateState} from "shared/contexts/Authenticate/Type.ts";

const initialState: AuthenticateState = {
    status: AUTHENTICATE_STATUS.IDLE,
    message: "Idle.",
    authenticated: undefined,
    authorized: undefined
}


const authenticateSlice = createSlice(
    {
        name: "authenticate",
        initialState,
        reducers: {
            clearCredential: (state): void => {
                state.status = AUTHENTICATE_STATUS.UNAUTHORIZED
                state.message = "Unauthorized."
                state.authenticated = undefined
                state.authorized = undefined
            },
            updateCredential: (state, action:PayloadAction<Partial<AuthenticateState>>): void => {
                const {payload} = action
                for (const key in payload) {
                    if (key in state) {
                        state[key] = payload[key]
                    }
                }
            }
        },

        extraReducers: (builder) => {
            builder.addCase(
                loadCredential.pending,
                (state) => {
                    state.status = AUTHENTICATE_STATUS.FETCHING
                    state.message = "Fetching."
                    state.authenticated = undefined
                    state.authorized = undefined
                }
            ).addCase(
                loadCredential.rejected,
                (state) => {
                    state.status = AUTHENTICATE_STATUS.CANCEL
                    state.message = "Fetching abort."
                    state.authenticated = undefined
                    state.authorized = undefined
                }
            ).addCase(
                loadCredential.fulfilled,
                (state, {payload: data}) => {
                    const {success, payload} = data
                    if (success) {
                        state.status = AUTHENTICATE_STATUS.AUTHENTICATED
                        state.message = "Authenticated."
                        state.authorized = payload.authorized
                        state.authenticated = payload.authenticated
                        return
                    }

                    state.status = AUTHENTICATE_STATUS.UNAUTHORIZED
                    state.message = "Unauthorized."
                    state.authenticated = undefined
                    state.authorized = undefined
                }
            )
        }
    }
)

const {
    actions: {
        clearCredential,
        updateCredential
    },
    reducer
} = authenticateSlice

export {clearCredential, updateCredential, reducer}