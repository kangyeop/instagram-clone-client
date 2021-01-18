import React from "react";
import { hydrate, render } from "react-dom";
import "./index.css";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import { configure } from "axios-hooks";
import Axios from "axios";
import LRU from "lru-cache";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import CounterContainer from "containers/CounterContainer";
// import App from "./app";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootReducer, { rootSaga } from "./modules";

const axios = Axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

const cache = new LRU({ max: 10 });

configure({ axios, cache });

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    // logger 를 사용하는 경우, logger가 가장 마지막에 와야합니다.
    composeWithDevTools(
        applyMiddleware(
            sagaMiddleware, // 사가 미들웨어를 적용하고
            logger,
        ),
    ),
); // 여러개의 미들웨어를 적용 할 수 있습니다.

sagaMiddleware.run(rootSaga); // 루트 사가를 실행해줍니다.

const AppBundle = (
    <React.StrictMode>
        <Provider store={store}>
            <Router history={history}>
                <CounterContainer />
            </Router>
        </Provider>
    </React.StrictMode>
);

const rootElement = document.getElementById("root");

if (rootElement?.hasChildNodes()) {
    hydrate(AppBundle, rootElement);
} else {
    render(AppBundle, rootElement);
}
