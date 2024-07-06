import {configureStore} from "@reduxjs/toolkit";
import {authenticateReducer} from "shared/contexts/Authenticate";

export const store = configureStore(
    {
        reducer: {
            authenticate: authenticateReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(
            {
                serializableCheck: {
                    ignoredActions: ["authenticate/loadCredential"],
                    ignoredActionPaths: ["payload.errorDetail"],
                    ignoredPaths: ['items.dates'],
                },
            }
        )
    }
)

export type ShareState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
