import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, ShareState} from "shared/contexts/root.ts";

export const useSharedDispatch: () => AppDispatch = useDispatch
export const useSharedSelector: TypedUseSelectorHook<ShareState> = useSelector