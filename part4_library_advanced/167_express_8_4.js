/**
 * express 모듈 8-3 - morgan 미들웨어
 * 접속로그를 남김 
 *
 * 로그 파일 순환
 * 아파치 결합 형식의 모든 요청을 로그 / 디렉토리에서 하루에 하나의 로그 파일에 로그하는 간단한 앱
 * rotating-file-stream module.
 * - https://www.npmjs.com/package/rotating-file-stream
 */
var express = require('express')
var fs = require('fs')
var morgan = require('morgan')
var path = require('path')
var rfs = require('rotating-file-stream')

var app = express()
var logDirectory = path.join(__dirname, 'log')

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// create a rotating write stream
var accessLogStream = rfs('access.log', {
    interval: '1d', // rotate daily
    path: logDirectory
})

// setup the logger
app.use(morgan('combined', {stream: accessLogStream}))

app.get('/', function (req, res) {
    res.send('hello, world!')
})

app.listen(3000, () => {
    console.log('Server is running port 3000!');
});