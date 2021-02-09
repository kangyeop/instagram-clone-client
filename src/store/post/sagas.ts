import { call, put, takeEvery } from "redux-saga/effects";
import { axios } from "api";
import { PostTypes, PostAction } from "./types";

const callPost = async (id: number) => {
    const res = await axios({ method: "get", url: `api/v1/articles/${id}` });
    return res;
};

const callComment = async (id: number) => {
    const res = await axios({ method: "get", url: `api/v1/articles/${id}/comments` });
    return res;
};

function* handleRequestPost(action: PostAction) {
    try {
        const { data: state } = yield call(callPost, action.payload.id);

        yield put({
            type: PostTypes.SUCCESS_POST,
            payload: { state },
        });
    } catch (e) {
        yield put({ type: PostTypes.FAIL_POST, payload: { error: e } });
    }

    try {
        const {
            data: { comments },
        } = yield call(callComment, action.payload.id);

        yield put({
            type: PostTypes.SUCCESS_COMMENT,
            payload: { comments },
        });
    } catch (e) {
        yield put({ type: PostTypes.FAIL_COMMENT, payload: { error: e } });
    }
}

export function* watchRequestPost() {
    yield takeEvery(PostTypes.REQUEST_POST, handleRequestPost);
}
