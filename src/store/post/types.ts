import { ActionType } from "typesafe-actions";
import { successPost, failPost, requestPost, requestComment, requestLike } from "./actions";
import * as actions from "./actions";

export type PostAction = ActionType<typeof requestPost>;
export type FailAction = ActionType<typeof failPost>;
export type SuccessAction = ActionType<typeof successPost>;
export type CommentAction = ActionType<typeof requestComment>;
export type LikeAction = ActionType<typeof requestLike>;
export type AllAction = ActionType<typeof actions>;

export interface IComment {
    content: string;
    createdBy: IAuthor;
    createdAt: string;
    nestedComments: IComment[];
}

interface IAuthor {
    id: number;
    nickname: string;
    profileImageUrl: string;
}

export interface IPostState {
    id: number;
    content: string;
    isLiked: boolean;
    imageUrls: string[];
    loading: boolean;
    createdBy: IAuthor;
    createdAt: string;
    comments: IComment[];
    isMore: boolean;
    error?: string;
}

export const PostTypes = {
    SUCCESS_POST: "POST_SUCCESS" as const,
    FAIL_POST: "POST_FAIL" as const,
    REQUEST_POST: "POST_REQUEST" as const,
    LIKE_POST: "LIKE_POST" as const,
    REQUEST_COMMENT: "REQUEST_COMMENT" as const,
    SUCCESS_COMMENT: "SUCCESS_COMMENT" as const,
    FAIL_COMMENT: "FAIL_COMMENT" as const,
    SET_COMMENT: "SET_COMMENT" as const,
    SUCCESS_LIKE: "SUCCESS_LIKE" as const,
    REQUEST_LIKE: "REQUEST_LIKE" as const,
    FAIL_LIKE: "FAIL_LIKE" as const,
    SET_MORE: "SET_MORE" as const,
};
