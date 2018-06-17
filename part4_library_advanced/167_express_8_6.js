/**
 * express 모듈 8-5 - morgan 미들웨어
 * 별도 로그 파일에 로그 저장하기
 *
 * 스플릿 / 이중 로깅
 * Morgan 미들웨어는 필요한만큼 여러 번 사용할 수 있으므로 다음과 같은 조합을 사용할 수 있습니다.
 * - 요청시 로그 항목 및 응답시 항목
 * - 모든 요청을 파일에 기록하지만 오류는 콘솔에 기록합니다.
 * - ... 그리고 더!
 * Apache 형식을 사용하여 파일에 대한 모든 요청을 기록하지만 오류 응답이 콘솔에 기록되는 샘플 응용 프로그램 :
 */
// morgan 미들웨어
var express = require('express')
var fs = require('fs')
var morgan = require('morgan')
var path = require('path')

var app = express()

// log only 4xx and 5xx responses to console
app.use(morgan('dev', {
    skip: function (req, res) { return res.statusCode < 400 }
}))

// log all requests to access.log
app.use(morgan('common', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
}))

app.get('/', function (req, res) {
    res.send('hello, world!')
})

app.listen(3000, () => {
    console.log('Server is running port 3000!');
});