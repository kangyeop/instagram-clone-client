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
    isMore: true,
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
    }),
    [PostTypes.SUCCESS_POST]: (state, action) => ({
        ...state,
        id: action.payload.state.id,
        content: action.payload.state.content,
        isLiked: action.payload.state.isLiked,
        imageUrls: action.payload.state.imageUrls,
        createdBy: action.payload.state.createdBy,
        createdAt: action.payload.state.createdAt,
        comments: action.payload.state.comments,
        isMore: true,
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
        comments: state.comments.concat(action.payload.comments),
    }),
    [PostTypes.FAIL_COMMENT]: (state, action) => ({
        ...state,
        comments: [],
        error: action.payload.error,
    }),
    [PostTypes.SET_MORE]: (state, action) => ({
        ...state,
        isMore: action.payload.isMore,
    }),
    [PostTypes.FAIL_LIKE]: (state, action) => ({
        ...state,
        error: action.payload.error,
    }),
    [PostTypes.SUCCESS_LIKE]: (state) => ({
        ...state,
        isLiked: !state.isLiked,
    }),
    [PostTypes.SET_COMMENT]: (state, action) => ({
        ...state,
        comments: action.payload.comments,
    }),
    // [PostTypes.SUCCESS_COMMENT_LIKE]: (state, action) =>
    //     produce(state, (draft) => {
    //         draft.comments.map((res) => {
    //             if (res.id === action.payload.id) {
    //                 res.
    //             }
    //         });
    //     }),
});

export default postReducer;
