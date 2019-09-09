// 在 Node 中专门提供了一个核心模块 http
// http 这个模块帮助你创建写服务器
var http = require('http')

// http.createServer() 方法创建一个 Web 服务器
var server = http.createServer()
// 接收请求，处理请求
server.on('request',function (request,response) {
    console.log('收到客户端请求')
})

// 绑定端口号，启动服务器
server.listen(3000,function () {
    console.log('服务器启动成功')
})