/**
 * express 모듈 7 - router 미들웨어
 * router 모듈은 라우팅을 지원하는 모듈
 * 라우팅은 애플리케이션 엔드 포인트(URI)의 정의, URI가 클라이언트 요청에 응답하는 방식
 * express 모듈에 페이지 라우팅 기능 기본적으로 내장
 * 라우팅 메소드
 * get() : GET 요청 발생 시 이벤트 리스너 지정
 * post() : POST 요청 발생 시 이벤트 리스너 지정
 * all(): 모든 요청 발생 시 이벤트 리스너 지정
 * put() : PUT 요청 발생 시 이벤트 리스너 지정
 * delete() : DELETE 요청 발생 시 이벤트 리스너 지정
 * 이 외에도 HTTP 메소드에 해당하는 메소드 지원
 */
// router 미들웨어
const express = require('express');

const app = express();

app.get('/one', (request, response) => {
  response.send('<a href="/two">Street 200</a>');
});

app.get('/two', (request, response) => {
  response.send('<a href="/one">Street 100</a>');
});

app.get('/three/:number', (request, response) => {
  const streetNumber = request.params.number;
  response.send(`${streetNumber}Street`);
});

app.get('/four/:number', (request, response) => {
  const aveNumber = request.params.number;
  response.send(`${aveNumber}Ave`);
});

app.listen(3000, () => {
  console.log('Server is running port 3000!');
});
