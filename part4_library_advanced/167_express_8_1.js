/**
 * express 모듈 8-1 - morgan 미들웨어
 * express/connect
 * Apache 결합 형식의 모든 요청을 STDOUT에 기록하는 간단한 응용 프로그램
 */
// morgan 미들웨어
var express = require('express')
var morgan = require('morgan')

var app = express()

app.use(morgan('combined'))

app.get('/', function (req, res) {
    res.send('hello, world!')
})

app.listen(3000, () => {
  console.log('Server is running port 3000!');
});
