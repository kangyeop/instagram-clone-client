import { call, put, takeEvery } from "redux-saga/effects";
import { axios } from "api";
import { store } from "store";
import { PostTypes, PostAction, CommentAction, LikeAction } from "./types";

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

const callLike = async (id: number, like: boolean) => {
    const res = await axios({
        method: like ? "post" : "delete",
        url: `api/v1/articles/${id}/likes`,
    });
    return res;
};

function* handleRequestPost(action: PostAction) {
    try {
        const { data: state } = yield call(callPost, action.payload.id);

        const {
            data: { comments },
        } = yield call(callComment, action.payload.id, 0, 10);

        state.comments = comments;

        yield put({
            type: PostTypes.SUCCESS_POST,
            payload: { state },
        });
    } catch (e) {
        yield put({ type: PostTypes.FAIL_POST, payload: { error: e } });
    }
}

function* handleRequestLike(action: LikeAction) {
    try {
        yield call(callLike, action.payload.id, !store.getState().postReducer.isLiked);
        yield put({ type: PostTypes.SUCCESS_LIKE, payload: { id: action.payload.id } });
    } catch (e) {
        yield put({ type: PostTypes.FAIL_LIKE, payload: { error: e } });
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

        if (action.payload.page === 0) {
            yield put({
                type: PostTypes.SET_COMMENT,
                payload: { comments },
            });
        } else {
            yield put({
                type: PostTypes.SUCCESS_COMMENT,
                payload: { comments },
            });
        }
    } catch (e) {
        yield put({ type: PostTypes.FAIL_COMMENT, payload: { error: e } });
    }
}

export function* watchRequestPost() {
    yield takeEvery(PostTypes.REQUEST_POST, handleRequestPost);
    yield takeEvery(PostTypes.REQUEST_COMMENT, handleRequestComment);
    yield takeEvery(PostTypes.REQUEST_LIKE, handleRequestLike);
}
