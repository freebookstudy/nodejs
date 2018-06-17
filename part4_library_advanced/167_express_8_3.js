/**
 * express 모듈 8 - morgan 미들웨어
 * 파일에 로그 기록
 * 하나의 파일
 * Apache 결합 형식의 모든 요청을 access.log 파일에 기록하는 간단한 응용 프로그램입니다.
 */
var express = require('express')
var fs = require('fs')
var morgan = require('morgan')
var path = require('path')

var app = express()

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})

// setup the logger
app.use(morgan('combined', {stream: accessLogStream}))

app.get('/', function (req, res) {
    res.send('hello, world!')
})

app.listen(3000, () => {
  console.log('Server is running port 3000!');
});
