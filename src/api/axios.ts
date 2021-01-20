import axios from "axios";
import { makeUseAxios } from "axios-hooks";

export const useAxios = makeUseAxios({
    axios: axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
            authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJpbnN0YWdyYW0tY2xvbmUiLCJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJleHAiOjE2MTExMjQ3NTIsIm1lbWJlcklkIjo0LCJyb2xlcyI6WyJST0xFX01FTUJFUiJdfQ.d5y-NWiVAXnApxlScRepqeXFpDoDOMbzeJgc8xMu_5c",
        },
    }),
});

export const useImageAxios = makeUseAxios({
    axios: axios.create({
        baseURL: process.env.REACT_APP_IMGUR_URL,
        headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_IMGUR_CLIENT_ID}`,
        },
    }),
});
