import { ActionType } from "typesafe-actions";
import { successPost, failPost, requestPost } from "./actions";

export type PostAction = ActionType<typeof successPost | typeof requestPost>;
export type FailAction = ActionType<typeof failPost>;

export interface IPostState {
    id: number;
    content: string;
    isLiked: boolean;
    imageUrls: string[];
    loading: boolean;
    profileImageUrl: string;
    nickname: string;
    error?: string;
}

export const PostTypes = {
    SUCCESS_POST: "POST_SUCCESS" as const,
    FAIL_POST: "POST_FAIL" as const,
    REQUEST_POST: "POST_REQUEST" as const,
    LIKE_POST: "LIKE_POST" as const,
};
