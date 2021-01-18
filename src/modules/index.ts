import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import counter, { counterSaga } from "modules/counter";

const rootReducer = combineReducers({
    counter,
});

export default rootReducer;
export function* rootSaga() {
    yield all([counterSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

export type RootState = ReturnType<typeof rootReducer>;
