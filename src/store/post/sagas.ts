import { call, put, takeEvery } from "redux-saga/effects";
import { axios } from "api";
import { PostTypes, PostAction, CommentAction } from "./types";

const callPost = async (id: number) => {
    const res = await axios({ method: "get", url: `api/v1/articles/${id}` });
    return res;
};

const callComment = async (id: number, page: number, size: number) => {
    const res = await axios({
        method: "get",
        url: `api/v1/articles/${id}/comments`,
        params: { page, size },
    });
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
}

function* handleRequestComment(action: CommentAction) {
    try {
        const {
            data: { comments },
        } = yield call(
            callComment,
            action.payload.id,
            action.payload.page,
            action.payload.size,
        );

        if (comments.length === 0) {
            yield put({ type: PostTypes.SET_MORE, payload: { isMore: false } });
            return;
        }

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
    yield takeEvery(PostTypes.REQUEST_COMMENT, handleRequestComment);
}
