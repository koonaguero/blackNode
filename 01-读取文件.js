// 浏览器中的JavaScript是没有文件操作能力的
// 但是 Node 中的 Javascript 具有文件操的能力

// fs 是 file-system 的简写，就是文件系统的意思
// 在 Node 中如果想要进行文件操作，就必须引入 fs 这个核心模块
// 在 fs 这个核心模块中，就提供了所有的文件操作相关的ApI
// 例如 fs.readFile 就是用来读取文件的

var fs = require('fs')

// 读取文件
    // 第一个参数就是要读取的文件路径
    // 第二个参数是一个回调函数
        // error
        // 如果读取失败， error 就是个错误对象
        // 如果读取成功， error 就是个 null
        // data
        // 如果读取成功， data 就是读取到的数据
        // 如果读取失败， data 就是 null
fs.readFile('./新建文本文档.md',function(error,data){
    console.log(data)
    // <Buffer 6e 6f 64 65 2e 6a 73 0d 0a 0d 0a 63 6e 6f 64 65 6a 73 2e 6f 72 67 20 6e 6f 64 65 e4 b8 ad e6 96 87 e7 a4 be e5 8c ba 0d 0a 6e 6f 64 65 2e 6a 73 20 0d ... >
    // 二进制转为16进制
    console.log(data.toString())
    console.log(error)
})