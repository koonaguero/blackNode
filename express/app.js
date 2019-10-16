const express = require('express')
const fs = require('fs')
const app = express()
const bodyParser = require('body-parser')

let comments = [
    {
        name: '老大',
        message: '今天天气不错'
    },
    {
        name: '老二',
        message: '明天出去玩'
    },
    {
        name: '老三',
        message: '后天干嘛呢'
    }
]
//配置使用 art-template 模板引擎
// express-art-template 依赖了 art-template
app.engine('html', require('express-art-template'));
// 配置 body-parser 中间件 (插件，专门用来解析表单 PSOT)
app.use(bodyParser.urlencoded({etended:false}))
app.use(bodyParser.json())
// app.set('views','public/html')
app.get('/', function (req, res) {
    res.render('post.html', {
        title: '我是标题'
    })
    // res.send('你好')
})

app.get('/post', function (req, res) {
    console.log(111)
    // fs.readFile('./public/html/post.html', function (err, data) {
    //     if (err) {
    //         return res.send('404 NOt Found.')
    //     }    
    //     // data = data.toString()
    //     // console.log(data)
    //     res.end(data)
    // })
    res.render('post.html')
})

app.get('/index', function (req, res) {
    res.render('index.html', {
        comments: comments
    })
})
// app.get('/pinglun', function (req, res) {
//     console.log(req.query)
//     comments.push(req.query)
//     res.redirect('/index')
    // res.statusCode = 302
    // res.setHeader('Location','/index')
    // res.send()
// })
app.post('/pinglun', function (req,res) {
    console.log(req.body)
})
// 指定目录
app.use('/public',express.static('./public/'))

app.listen(3000, function () {
    console.log('loading...')
})