import { createReducer } from "typesafe-actions";
import { IPostState, PostTypes, AllAction } from "./types";

const initialState: IPostState = {
    id: -1,
    content: "",
    isLiked: false,
    imageUrls: [],
    createdBy: {
        id: -1,
        profileImageUrl: "",
        nickname: "",
    },
    comments: [],
    createdAt: "",
    loading: true,
    error: undefined,
};

const postReducer = createReducer<IPostState, AllAction>(initialState, {
    [PostTypes.REQUEST_POST]: (state) => ({
        ...state,
        loading: true,
    }),
    [PostTypes.REQUEST_COMMENT]: (state) => ({
        ...state,
        loading: true,
    }),
    [PostTypes.SUCCESS_POST]: (state, action) => ({
        ...state,
        id: action.payload.state.id,
        content: action.payload.state.content,
        isLiked: action.payload.state.isLiked,
        imageUrls: action.payload.state.imageUrls,
        createdBy: action.payload.state.createdBy,
        createdAt: action.payload.state.createdAt,
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
    [PostTypes.SUCCESS_COMMENT]: (state, action) => ({
        ...state,
        comments: action.payload.comments,
        loading: false,
    }),
    [PostTypes.FAIL_COMMENT]: (state, action) => ({
        ...state,
        comments: [],
        error: action.payload.error,
    }),
});

export default postReducer;
