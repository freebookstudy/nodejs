/**
 * express 모듈 8 - morgan 미들웨어
 * winston과 같이 웹 요청이 들어왔을 때 로깅하는 모듈
 * https://github.com/expressjs/morgan
 */
// morgan 미들웨어
const express = require('express');
const morgan = require('morgan');

const app = express();

//가장 기본적으로 쓰이는 로그 형식 combined, common
//token들을 조합해서 원하는 형식으로 로그를 출력
app.use(morgan('combined'));
app.use(morgan('common'));
app.use(morgan(':method :date'));
app.use(morgan(':status :url'));
app.use((request, response) => {
  response.send('express morgan');
});

app.listen(3000, () => {
  console.log('Server is running port 3000!');
});
