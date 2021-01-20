import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type AuthAction = ActionType<typeof actions>;

export interface IAuthState {
    isLogin: boolean;
    accessToken: string;
}

export const AuthTypes = {
    SET_TOKEN: "AUTH_SET_TOKEN" as const,
    DEL_TOKEN: "AUTH_DEL_TOKEN" as const,
};
