/**
 * 쿠키(Cookie) 생성
 * 쿠키(Cookie)란 인터넷 사용자가 어떠한 웹 사이트를 방문할 경우 그 사이트가
 * 사용하고 있는 서버를 통해 인터넷 사용자의 컴퓨터에 설치되는 작은 기록 정보 파일을 의미
 */
const http = require('http');

http.createServer((request, response) => {
  // cookie
  response.writeHead(200, {
    'Content-Type': 'text/html',
    'Set-Cookie': ['soju = grilledPork', 'beer = chicken'],
  });

  // cookie output
  response.end(`<h1>${request.headers.cookie}</h1>`);
}).listen(50000, () => {
  console.log('서버가 동작 중입니다, http://127.0.0.1:50000');
});
