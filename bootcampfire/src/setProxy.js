const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: "http://i9a408.p.ssafy.io:8080",
      changeOrigin: true,
    })
  );
};