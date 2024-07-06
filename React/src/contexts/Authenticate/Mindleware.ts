import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthenticateState} from "shared/contexts/Authenticate/Type.ts";
import AuthenticateService from "shared/services/AuthenticateService.ts";
import {ResponseBase} from "shared/types/Response.ts";

export const loadCredential = createAsyncThunk<ResponseBase<AuthenticateState>>(
    "authenticate/loadCredential",
    async () => await AuthenticateService.getCredential()
)