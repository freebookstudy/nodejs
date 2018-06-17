/**
 * express 모듈 8-6 - morgan 미들웨어
 *
 * 사용자 지정 토큰 형식 사용
 * 맞춤 토큰 형식을 사용할 샘플 앱. 이렇게하면 모든 요청에​ID가 추가되고 ID 토큰을 사용하여 표시됩니다.
 *
 * 고유ID node-uuid, shortid 생성
 * 고유ID 생성법
 * Math.random().toString(26).slice(2)
 *
 * shortid
 * ShortId는 놀랍게도 짧은 순차적이지 않은 URL 친화적 인 고유 ID를 만듭니다. url 단축키, MongoDB 및 Redis ID 및 다른 ID 사용자에게 적합합니다.
 * - 기본적으로 7-14 개의 URL 친숙한 문자 : AZ, az, 0-9, _-
 * - 비 순차적이므로 예측할 수 없습니다.
 * - 수없이 많은 ID를 생성 할 수 있으며, 심지어 하루에도 수백만 개의 ID를 생성 할 수 있습니다.
 * - 앱은 ID를 반복 할 필요없이 여러 번 다시 시작할 수 있습니다.
 */
// morgan 미들웨어
var express = require('express')
var morgan = require('morgan')
//고유ID 생성모듈
// var uuid = require('node-uuid')
var uuidv4 = require('uuid/v4')
var shortid = require('shortid')

morgan.token('id', function getId (req) {
    return req.id
})

var app = express()

app.use(assignId)
app.use(morgan(':id :method :url :response-time'))

app.get('/', function (req, res) {
    console.log('shortid : ',shortid.generate());
    res.send('hello, world!')
})

function assignId (req, res, next) {
    // req.id = uuid.v4()
    req.id = uuidv4();
    next()
}

app.listen(3000, () => {
  console.log('Server is running port 3000!');
});
