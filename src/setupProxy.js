/* eslint-disable no-console */
const { createProxyMiddleware } = require("http-proxy-middleware");

// proxy 로 request 시 이벤트
let cookie;
function relayRequestHeaders(proxyReq, req) {
    Object.keys(req.headers).forEach(function (key) {
        console.debug(`${key} : ${req.headers[key]}`);
    });
    if (cookie) {
        proxyReq.setHeader("cookie", cookie);
    }
}

// proxy 로 Response 시 이벤트
function relayResponseHeaders(proxyRes, req, res) {
    console.debug("💥💥💥 response 💥💥💥");
    Object.keys(proxyRes.headers).forEach(function (key) {
        console.debug(`${key} : ${proxyRes.headers[key]}`);
    });
    const proxyCookie = proxyRes.headers["set-cookie"];
    if (proxyCookie) {
        cookie = proxyCookie;
    }
}

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "https://instagram-clone-5erver.herokuapp.com",
            changeOrigin: true,
            onProxyReq: relayRequestHeaders,
            onProxyRes: relayResponseHeaders,
        }),
    );
};
