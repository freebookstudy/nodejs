/**
 * express 모듈 3 - request
 * request 객체의 메소드와 속성
 * headers: 요청 헤더의 추출
 * Header(): 요청 헤더의 속성 지정 또는 추출
 * query: GET 방식으로 요청한 매개변수 확인
 * body: POST 방식으로 요청한 매개변수 확인
 * params: 라우팅 매개변수 추출
 */
// 요청 메서드
const express = require('express');

const app = express();

app.use((request, response) => {
  //요청헤더 추출
  const agent = request.header('User-Agent');
  const paramName = request.query.name;
  const browserChrome = 'Hello Chrome';
  const browserOthers = 'Hello Others';

  console.log('headers : ',request.headers);
  console.log('baseUrl : ',request.baseUrl);
  console.log('hostname : ',request.hostname);
  console.log('protocol : ',request.protocol);

  //크롬 브라우저인지 아닌지에 따른 다른 출력값
  if (agent.toLowerCase().match(/chrome/)) {
    response.write(`<div><p>${browserChrome}</p></div>`);
  } else {
    response.write(`<div><p>${browserOthers}</p></div>`);
  }
  response.write(`<div><p>${agent}</p></div>`);
  response.write(`<div><p>${paramName}</p></div>`);
  response.end();
});

app.listen(3000, () => {
  console.log('Server is running port 3000!');
});
