import { call, put, takeEvery, select } from "redux-saga/effects";
import { axios } from "api";
import { IImgurData } from "types/types";
import { RootState } from "../rootReducer";
import { PostFormTypes } from "./types";

const callPost = async (content: string, imageUrls: IImgurData[]) => {
    const imageArray = imageUrls.map((imgurData) => {
        return imgurData.link;
    });

    const {
        data: { id },
    } = await axios({
        url: "api/v1/articles",
        method: "post",
        data: { content, imageUrls: imageArray },
    });
    return id;
};

function* handleRequestRegister() {
    try {
        const state: RootState = yield select();

        const id = yield call(
            callPost,
            state.postFormReducer.content,
            state.postFormReducer.imageUrls,
        );

        yield put({
            type: PostFormTypes.REGISTER_SUCCESS,
            payload: { id },
        });
    } catch (e) {
        yield put({ type: PostFormTypes.REGISTER_FAIL, payload: { error: e } });
    }
}

export function* watchRequestRegister() {
    yield takeEvery(PostFormTypes.REGISTER_REQUEST, handleRequestRegister);
}
