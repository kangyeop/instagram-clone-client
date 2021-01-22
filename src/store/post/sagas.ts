import { call, put, takeEvery } from "redux-saga/effects";
import { axios } from "api";
import { PostTypes, PostAction } from "./types";

const callPost = async (id: number) => {
    const res = await axios({ method: "get", url: `api/v1/articles/${id}` });
    return res;
};

function* handleRequestPost(action: PostAction) {
    try {
        const {
            data: { id, content, isLiked, imageUrls },
        } = yield call(callPost, action.payload.id);

        yield put({
            type: PostTypes.SUCCESS_POST,
            payload: { id, content, isLiked, imageUrls },
        });
    } catch (e) {
        yield put({ type: PostTypes.FAIL_POST, payload: { error: e } });
    }
}

export function* watchRequestPost() {
    yield takeEvery(PostTypes.REQUEST_POST, handleRequestPost);
}
