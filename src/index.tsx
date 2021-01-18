import React from "react";
import { hydrate, render } from "react-dom";
import "./index.css";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import App from "./app";

const history = createBrowserHistory();

const AppBundle = (
    <React.StrictMode>
        <Router history={history}>
            <App />
        </Router>
    </React.StrictMode>
);

const rootElement = document.getElementById("root");

if (rootElement?.hasChildNodes()) {
    hydrate(AppBundle, rootElement);
} else {
    render(AppBundle, rootElement);
}
