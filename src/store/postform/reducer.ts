import { createReducer } from "typesafe-actions";
import { PostFormAction, IPostFormState, PostFormTypes } from "./types";

const initialState: IPostFormState = {
    id: -1,
    content: "",
    imageUrls: [],
    canClick: false,
    error: undefined,
};

const postFormReducer = createReducer<IPostFormState, PostFormAction>(initialState, {
    [PostFormTypes.CONTENT_SET]: (state, action) => ({
        ...state,
        content: action.payload.content,
        canClick: !!action.payload.content,
    }),
    [PostFormTypes.IMAGE_URL_SET]: (state, action) => ({
        ...state,
        imageUrls: action.payload.imageUrls,
    }),
    [PostFormTypes.REGISTER_SUCCESS]: (state, action) => ({
        ...state,
        id: action.payload.id,
    }),
    [PostFormTypes.RESET_STATE]: (state) => ({
        ...state,
        id: -1,
        content: "",
        imageUrls: [],
        canClick: false,
        error: undefined,
    }),
});

export default postFormReducer;
