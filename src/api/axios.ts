import axios from "axios";
import { makeUseAxios } from "axios-hooks";

export const useAxios = makeUseAxios({
    axios: axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
            authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJpbnN0YWdyYW0tY2xvbmUiLCJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJleHAiOjE2MTA3MjE0MzUsIm1lbWJlcklkIjo0LCJyb2xlcyI6WyJST0xFX01FTUJFUiJdfQ.Wp5Drsk8yNVUzoDAq6RSrcMunTO85Q9AeCLHq_HJpIs",
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
