 const fs = require('fs')
 const http = require('http')
const template = require('art-template')

var server = http.createServer()

server.on('request', function (req,res) {
    var url = req.url
    fs.readFile('./Apache目录.html', function (err,data) {
        if (err) {
            return res.end('404 Not Found.')
        } else {
            fs.readdir('./', function (err,files) {
                if (err) {
                    return res.end('Can not find www dir.')
                }
                var tpl = template.render(data.toString(),{
                    title: '哈哈',
                    files: files
                })
                res.end(tpl)
            })
            // console.log(data)

            // res.end(data)
        }
    })
})
server.listen(3000, function () {
    console.log('running...')
})