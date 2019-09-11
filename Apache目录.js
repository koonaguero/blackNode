const http = require('http')
const fs = require('fs')

var server = http.createServer()

server.on('request',function (req,res) {
    var url = req.url
    // var fileUrl = 'C:/Users/koon/Documents/WeChat Files/koonaguero/FileStorage/File/2019-09/b站黑马node/blackNode/blackNode'
    if (url !== '/'){
        fs.readFile('./Apache目录.html',function (err,data) {
            if (err) {
                console.log(err)
                res.end('404 Not Found.')
            } else {
                res.end(data)
            }

        })
    }
})

server.listen(3000,function () {
    console.log('running...')
})