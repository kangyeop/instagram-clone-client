import { createAction } from "typesafe-actions";
import { AuthTypes } from "./types";

export const setLogin = createAction(AuthTypes.SET_TOKEN)();

export const delLogin = createAction(AuthTypes.DEL_TOKEN)();
