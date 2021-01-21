/* eslint-disable no-param-reassign */
import Axios from "axios";
import { store } from "store";

export const axios = Axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

axios.interceptors.request.use((config) => {
    config.headers.Authorization = store.getState().authReducer.accessToken || "";
    return config;
});

export const imgurAxios = Axios.create({
    baseURL: process.env.REACT_APP_IMGUR_URL,
    headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_IMGUR_CLIENT_ID}`,
    },
});
