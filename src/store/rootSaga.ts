import { all, call } from "redux-saga/effects";
import { watchRequestPost } from "./post/sagas";
import { watchRequestRegister } from "./postform/sagas";

export default function* rootSaga() {
    yield all([call(watchRequestPost), call(watchRequestRegister)]);
}
