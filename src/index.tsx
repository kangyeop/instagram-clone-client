import React from "react";
import { hydrate, render } from "react-dom";
import "./index.css";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import { configure } from "axios-hooks";
import Axios from "axios";
import LRU from "lru-cache";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "store";
import App from "./app";

const axios = Axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

const cache = new LRU({ max: 10 });

configure({ axios, cache });

const history = createBrowserHistory();

const AppBundle = (
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router history={history}>
                    <App />
                </Router>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

const rootElement = document.getElementById("root");

if (rootElement?.hasChildNodes()) {
    hydrate(AppBundle, rootElement);
} else {
    render(AppBundle, rootElement);
}
