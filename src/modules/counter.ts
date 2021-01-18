import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

// action type
const INCREASE = "counter/INCREASE" as const; // counter/INCREASE : action에 들어갈 type
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY" as const;
const INCREASE_ASYNC = "INCREASE_ASYNC";
const DECREASE_ASYNC = "DECREASE_ASYNC";

// action function
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
    type: INCREASE_BY,
    payload: diff, // FSA 규칙
});
export const increaseAsync = () => ({ type: INCREASE_ASYNC }); // saga
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

function* increaseSaga() {
    yield delay(1000); // 1초를 기다립니다.
    yield put(increase()); // put은 특정 액션을 디스패치 해줍니다.
}
function* decreaseSaga() {
    yield delay(1000); // 1초를 기다립니다.
    yield put(decrease()); // put은 특정 액션을 디스패치 해줍니다.
}
export function* counterSaga() {
    yield takeEvery(INCREASE_ASYNC, increaseSaga); // 모든 INCREASE_ASYNC 액션을 처리
    yield takeLatest(DECREASE_ASYNC, decreaseSaga); // 가장 마지막으로 디스패치된 DECREASE_ASYNC 액션만을 처리
}

type CounterAction =
    | ReturnType<typeof increase>
    | ReturnType<typeof decrease>
    | ReturnType<typeof increaseBy>;

type CounterState = {
    // type대신 interface도 사용가능 일관성만 있게
    count: number;
};

const initialState: CounterState = {
    count: 0,
};

// reducer
function counter(state: CounterState = initialState, action: CounterAction) {
    switch (action.type) {
        case INCREASE:
            return { count: state.count + 1 };
        case DECREASE:
            return { count: state.count - 1 };
        case INCREASE_BY:
            return { count: state.count + action.payload };
        default:
            return state;
    }
}

export default counter;
