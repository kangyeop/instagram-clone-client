import { createReducer } from "typesafe-actions";
import { PostAction, IPostState, PostTypes, FailAction } from "./types";

const initialState: IPostState = {
    id: -1,
    content: "",
    isLiked: false,
    imageUrls: [],
    profileImageUrl: "",
    nickname: "",
    loading: true,
    error: undefined,
};

const postReducer = createReducer<IPostState, PostAction | FailAction>(initialState, {
    [PostTypes.SUCCESS_POST]: (state, action) => ({
        ...state,
        id: action.payload.id,
        content: action.payload.content,
        isLiked: action.payload.isLiked,
        imageUrls: action.payload.imageUrls,
        profileImageUrl: action.payload.profileImageUrl,
        nickname: action.payload.nickname,
        loading: false,
    }),
    [PostTypes.FAIL_POST]: (state, action) => ({
        ...state,
        id: -1,
        content: "",
        isLiked: false,
        imageUrls: [],
        loading: false,
        error: action.payload.error,
    }),
    [PostTypes.REQUEST_POST]: (state) => ({
        ...state,
        loading: true,
    }),
});

export default postReducer;
