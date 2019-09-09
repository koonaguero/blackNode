var fs = require('fs')

// 第一个参数：文件路径
// 第二个参数：文件内容
// 第三个参数：回调函数
    // error
fs.writeFile('./写你好.md','大家好,给大家介绍一下,我是Node.js',function (error) {

    if(error == null){
        console.log('文件添加成功')
    }else{
        console.log('文件创建失败',error)
    }
}) 