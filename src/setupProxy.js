const { createProxyMiddleware } = require('http-proxy-middleware');

//创建一个http代理
const apiProxy = createProxyMiddleware('/api', { target: 'http://localhost:3721/' });

module.exports = function (app) {
    app.use(apiProxy)
}