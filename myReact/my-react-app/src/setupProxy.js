// 这个跨域代理文件
const {createProxyMiddleware} = require("http-proxy-middleware")

module.exports = function(app){
    app.use(createProxyMiddleware(
        "/douyu", {
            target: "http://open.douyucdn.cn/api/RoomApi/game",
            changeOrigin: true,
            pathRewrite: {
                "^/douyu": ""
            }
        }
    ))
}