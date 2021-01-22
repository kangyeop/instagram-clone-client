/* eslint-disable no-unused-vars */
// / <reference types="react-scripts" />

declare namespace NodeJS {
    interface ProcessEnv {
        REACT_APP_API_URL: string;
        REACT_APP_IMGUR_CLIENT_ID: string;
        REACT_APP_IMGUR_URL: string;
        REACT_APP_DOMAIN: string;
    }
}
