import { createAction } from "typesafe-actions";
import { AuthTypes } from "./types";

export const setToken = createAction(AuthTypes.SET_TOKEN)<{
    accessToken: string;
}>();

export const delToken = createAction(AuthTypes.DEL_TOKEN)();
