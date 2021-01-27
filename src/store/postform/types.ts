import { ActionType } from "typesafe-actions";
import { IImgurData } from "types/types";
import {
    requestRegister,
    successRegister,
    failRegister,
    setContent,
    setImageUrls,
} from "./actions";
import * as actions from "./actions";

export type PostFormAction = ActionType<typeof actions>;
export type RequestAction = ActionType<typeof requestRegister | typeof successRegister>;
export type FailAction = ActionType<typeof failRegister>;
export type ContentAction = ActionType<typeof setContent>;
export type ImageUrlsAction = ActionType<typeof setImageUrls>;

export interface IPostFormState {
    id: number;
    content: string;
    imageUrls: IImgurData[];
    error?: string;
    canClick: boolean;
}

export const PostFormTypes = {
    REGISTER_SUCCESS: "REGISTER_SUCCESS" as const,
    REGISTER_FAIL: "REGISTER_FAIL" as const,
    REGISTER_REQUEST: "REGISTER_REQUEST" as const,
    CONTENT_SET: "CONTENT_SET" as const,
    IMAGE_URL_SET: "IMAGE_URL_SET" as const,
    RESET_STATE: "RESET_STATE" as const,
};
