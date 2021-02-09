import { createAction } from "typesafe-actions";
import { IImgurData } from "types/types";
import { PostFormTypes } from "./types";

export const successRegister = createAction(PostFormTypes.REGISTER_SUCCESS)<{
    id: number;
}>();

export const requestRegister = createAction(PostFormTypes.REGISTER_REQUEST)();

export const failRegister = createAction(PostFormTypes.REGISTER_FAIL)<{ error: string }>();

export const setContent = createAction(PostFormTypes.CONTENT_SET)<{ content: string }>();

export const setImageUrls = createAction(PostFormTypes.IMAGE_URL_SET)<{
    imageUrls: IImgurData[];
}>();

export const resetState = createAction(PostFormTypes.RESET_STATE)();
