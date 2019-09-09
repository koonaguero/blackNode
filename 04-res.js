// 在 Node 中专门提供了一个核心模块 http
// http 这个模块帮助你创建写服务器
var http = require('http')

// http.createServer() 方法创建一个 Web 服务器
var server = http.createServer()
// 接收请求，处理请求
// request  请求对象
// response 响应对象
server.on('request',function (request,response) {
    console.log('收到客户端请求')
    console.log(request.url)
    // response 对象有一个方法：weite 可以用来给客户端发送响应数据
    // write 可以使用多次,但是最后一定要使用  end 来结束响应,否则客户端会一直等待
    // response.write('hello')
    // response.end()
    var u = request.url
    // if( u == '/login'){
    //     response.write('登录1')
    //     response.end()
    // }else if( u == '/register'){
    //     response.write('注册2')
    //     response.end()
    // }else if(u == '/haha'){
    //     response.write('哈哈3')
    //     response.end()
    // }
    var sfun = function (u) {
        response.write(u)
        response.end()
    }
    switch(u){
        case '/login':
                sfun('1')
            break;
        case '/register':
                sfun('2')
            break;
        case '/haha':
                sfun('3')
            break;
    }
})

// 绑定端口号，启动服务器
server.listen(3000,function () {
    console.log('服务器启动成功')
})