// art-template node 浏览器都可以使用
// 安装 npm install or yarn add art-template 
// const http = require('http')
const template = require('art-template')
const fs = require('fs')
// var server = http.createServer()

// var tplStr = `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge">
//         <title>Document</title>
//     </head>
//     <body>

//             <p>我叫 {{ name }}</p>
//             <p>我今年 {{ age }} 岁</p>
//             <p>我来自 {{ province }}</p>
//             <p>我喜欢 {{each hobbies}} {{ $value }} {{/each}}</p>

//     </body>
//     </html>
// `
fs.readFile('./tpl.html', function (err,data) {
    if (err) {
       return console.log('读取文件失败了')
    } else {
        data = data.toString()
        var ret = template.render(data, {
            name: '蔡徐坤',
            age: '28',
            province: '北京市',
            hobbies: [
                '唱',
                '跳',
                'Rap',
                '篮球'
            ],
            title: '个人信息'
        })    
    console.log(ret)
    }
})