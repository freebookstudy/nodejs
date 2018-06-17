/**
 * express 모듈 1 - overview
 * 써드파티 미들웨어
 * http://expressjs.com/ko/resources/middleware.html
 */
const express = require('express');

//express 메소드로 앱의 객체 생성
const app = express();

/*
app.use((request, response) => {
  response.send('Hello express module');
});
*/

//get() 함수를 이용해 /URI로 호출되었을 경우 해당 로직을 실행
app.get('/', (request, response) => {
  response.send('Hello express module');
});

//서버를 동작시킴
app.listen(3000, () => {
  console.log('Server is running port 3000!');
});