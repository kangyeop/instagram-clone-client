import { createAction } from "typesafe-actions";
import { PostTypes } from "./types";

export const successPost = createAction(PostTypes.SUCCESS_POST)<{
    id: number;
    content: string;
    isLiked: boolean;
    imageUrls: string[];
    profileImageUrl: string;
    nickname: string;
}>();

export const requestPost = createAction(PostTypes.REQUEST_POST)<{
    id: number;
}>();

export const likePost = createAction(PostTypes.LIKE_POST)<{
    id: number;
}>();

export const failPost = createAction(PostTypes.FAIL_POST)<{ error: string }>();
