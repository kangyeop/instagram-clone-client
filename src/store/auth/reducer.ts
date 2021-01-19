import { createReducer } from "typesafe-actions";
import { AuthAction, IAuthState, AuthTypes } from "./types";

const initialState: IAuthState = {
    isLogin: false,
    accessToken: "",
};

const authReducer = createReducer<IAuthState, AuthAction>(initialState, {
    [AuthTypes.SET_TOKEN]: (state, action) => ({
        ...state,
        isLogin: true,
        accessToken: action.payload.accessToken,
    }),
    [AuthTypes.DEL_TOKEN]: (state) => ({
        ...state,
        isLogin: false,
        accessToken: "",
    }),
});

export default authReducer;
