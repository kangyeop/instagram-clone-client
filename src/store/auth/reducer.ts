import { createReducer } from "typesafe-actions";
import { AuthAction, IAuthState, AuthTypes } from "./types";

const initialState: IAuthState = {
    isLogin: false,
};

const authReducer = createReducer<IAuthState, AuthAction>(initialState, {
    [AuthTypes.SET_TOKEN]: (state) => ({
        ...state,
        isLogin: true,
    }),
    [AuthTypes.DEL_TOKEN]: (state) => ({
        ...state,
        isLogin: false,
    }),
});

export default authReducer;
