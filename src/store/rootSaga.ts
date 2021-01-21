import { all, call } from "redux-saga/effects";
import { watchRequestPost } from "./post/sagas";

export default function* rootSaga() {
    yield all([call(watchRequestPost)]);
}
