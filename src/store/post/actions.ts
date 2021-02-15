import { createAction } from "typesafe-actions";
import { PostTypes, IPostState, IComment } from "./types";

export const successPost = createAction(PostTypes.SUCCESS_POST)<{
    state: IPostState;
}>();

export const requestPost = createAction(PostTypes.REQUEST_POST)<{
    id: number;
}>();

export const likePost = createAction(PostTypes.LIKE_POST)<{
    id: number;
}>();

export const failPost = createAction(PostTypes.FAIL_POST)<{ error: string }>();

export const successComment = createAction(PostTypes.SUCCESS_COMMENT)<{
    comments: IComment[];
}>();

export const requestComment = createAction(PostTypes.REQUEST_COMMENT)<{
    id: number;
    page: number;
    size: number;
}>();

export const failComment = createAction(PostTypes.FAIL_COMMENT)<{ error: string }>();

export const setMore = createAction(PostTypes.SET_MORE)<{ isMore: boolean }>();

export const successLike = createAction(PostTypes.SUCCESS_LIKE)<{ id: number }>();

export const failLike = createAction(PostTypes.FAIL_LIKE)<{ error: string }>();

export const requestLike = createAction(PostTypes.REQUEST_LIKE)<{
    id: number;
}>();

export const setComment = createAction(PostTypes.SET_COMMENT)<{
    comments: IComment[];
}>();
