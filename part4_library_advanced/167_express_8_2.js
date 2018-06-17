/**
 * express 모듈 8 - morgan 미들웨어
 * 바닐라 http 서버
 * Apache 결합 형식의 모든 요청을 STDOUT에 기록하는 간단한 응용 프로그램
 */
var finalhandler = require('finalhandler')
var http = require('http')
var morgan = require('morgan')

// create "middleware"
var logger = morgan('combined')

http.createServer(function (req, res) {
    var done = finalhandler(req, res)
    logger(req, res, function (err) {
        if (err) return done(err)

        // respond to request
        res.setHeader('content-type', 'text/plain')
        res.end('hello, world!')
    })
}).listen(3000, () => {
  console.log('Server is running port 3000!');
});
