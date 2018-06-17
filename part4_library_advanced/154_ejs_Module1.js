/**
 * ejs 모듈 1
 * 웹 페이지를 동적으로 처리하는 템플릿 엔진 모듈로 특정 형식의 문자열을 HTML 형식의 문자열로 변환
 * ejs 모듈의 메소드
 * render(): ejs 문자열을 HTML 문자열로 변경
 * ejs 파일의 특수 태그
 * <%CODE%>: Javascript 코드 입력
 * %=VALUE%>: 데이터 출력
 */
const ejs = require('ejs');
const fs = require('fs');
const http = require('http');

http.createServer((request, response) => {
  fs.readFile('154_ejs_example.ejs', 'utf-8', (error, data) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(ejs.render(data));
  });
}).listen(50000, () => {
  console.log('서버가 동작 중입니다, http://127.0.0.1:50000');
});
