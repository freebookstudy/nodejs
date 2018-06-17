/**
 * express 모듈 11 - express-session 미들웨어
 * 세션(session) 사용자 로그인 정보 저장에 많이 사용
 * 클라이언트 세션 식별자 쿠키를 부여하고 그 쿠키와 대응되는 저장소에 데이터를 저장
 * 브라우져가 켜져 있는 동안만 유지
 * session() 메소드의 cookie 옵션을 통해 name, 저장소, 시간등을 설정
 * http://github.com/expressjs/session
 */

// express-session 미들웨어
const express = require('express');
const parseurl = require('parseurl');
//세션을 생성할때 사용
const session = require('express-session');

const app = express();

app.use(session({
  secret: 'keyboard dog',
  resave: false,
  saveUninitialized: true,
}));

//request 객체에 session 속성을 활용
app.use((request, response, next) => {
  if (!request.session.views) {
    request.session.views = {};
  }

  console.log(request.session);

  // get the URL
  const pathname = parseurl(request).pathname;
  console.log('pathname : ', pathname);

  console.log('session views : ', request.session.views[pathname]);
  //false 나 undefined 면 0
  console.log('session views || ',(request.session.views[pathname] || 0) +1);
  // count the views
  request.session.views[pathname] = (request.session.views[pathname] || 0) + 1;

  next();
});

app.get('/puddle', (request, response) => {
  response.send(`Hello puddle! you viewed this page ${request.session.views['/puddle']} times`);
});

app.get('/biggle', (request, response) => {
  response.send(`Hello biggle! you viewed this page ${request.session.views['/biggle']} times`);
});

app.listen(3000, () => {
  console.log('Server is running port 3000!');
});
