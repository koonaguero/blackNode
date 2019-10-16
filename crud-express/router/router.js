const express = require('express')
const fs = require('fs')

let router = express.Router()

router.get('/', function (req,res) {
    fs.readFile('./db.json', 'utf8', function (err,data) {
        
        if (err) {
            return res.status(500).send('server error')
        }
        // console.log(data)
        let students = JSON.parse(data).students
        console.log(students)
        res.render('index.html',{
            fruits: [
                '苹果',
                '香蕉',
                '橘子'
            ],
            students:students
        })
    })

})

router.get('/students/new', function (req, res) {
    res.render('student_new.html', function (err,data) {
        res.end(data)
    })
})

router.post('/students/new', function (req, res) {
    console.log(req.body)
    console.log('ok')
})
module.exports = router