var http = require('http')
var server = http.createServer()
server.on('request',function (req,res) {
    // 普通文本，按照utf-8去解析响应内容
    // res.setHeader('Content-Type','text/plain; charset=utf-8')
    // res.end('Hello 世界')

    var url = req.url

    if (url === '/plain') {
        res.setHeader('Content-Type','text/plain; charset=utf-8')
        res.end('hello 世界')
    } else if (url === '/html') {
        res.setHeader('Content-Type','text/html; charset=utf-8')
        res.end('<p>hello html</p><a href="#">点我</a>')
    }
})
server.listen(3000,function () {
    console.log('服务器开启成功')
})