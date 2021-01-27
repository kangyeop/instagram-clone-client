import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import postReducer from "./post/reducer";
import postFormReducer from "./postform/reducer";

const rootReducer = combineReducers({
    authReducer,
    postReducer,
    postFormReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
