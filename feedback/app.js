const http = require('http')
const fs = require('fs')
const template = require('art-template')
const url = require('url')

// var obj = url.parse('http://127.0.0.1:3000/pinglun?name=%E5%86%85%E8%A6%85%E6%94%B6%E5%88%B0%E5%90%8Ei&message=%E5%B0%B1%E5%8F%91%E7%94%9F%E5%A4%A7%E7%BA%B2',true)
// console.log(obj)
var comments = [
    {
        name: '张三',
        message: '123456',
        dateTime: '2019-9-11'
    },
    {
        name: '张三',
        message: '123456',
        dateTime: '2019-9-11'
    },
    {
        name: '张三',
        message: '123456',
        dateTime: '2019-9-11'
    },
    {
        name: '张三',
        message: '123456',
        dateTime: '2019-9-11'
    }
]

http.createServer(function (req,res) { 
    var parseObj = url.parse(req.url,true)
    var pathname = parseObj.pathname
    if (pathname === '/') {
        fs.readFile('./views/index.html', function (err,data) {
            if (err) {
                return res.end('404 Not Found.')
            }  
            data = template.render(data.toString(),{comments})
            res.end(data)
        })
    } else if (pathname === '/post') {
        fs.readFile('./views/post.html', function (err,data) {
            if (err) {
                return res.end('404 Not Found.')
            }
            res.end(data)
        })
    } else if (pathname === '/pinglun') {
        // res.end(JSON.stringify(parseObj.query))
        var comment = parseObj.query
        comment.dateTime = new Date()
        comments.unshift(comment)
        res.statusCode = 302
        res.setHeader('Location','/')
        res.end()
    } else if (pathname.indexOf('/public') === 0) {
        console.log(pathname)
        fs.readFile('.'+pathname, function (err,data) {
            if (err) {
                return res.end('404 Not Found.')
            }
            res.end(data)
        })
    } else {
        fs.readFile('./views/404.html', function (err,data) {
            if (err) {
                return res.end('404 Not Found..')
            }
            res.end(data)
        })
    }
    // res.end('hello')
})
.listen(3000, function () {
    console.log('runing...')
})