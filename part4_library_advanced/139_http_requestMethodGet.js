/**
 * HTTP 모듈 - request 객체, method 속성 GET
 * GET은 그냥 요청 - 키워드를 입력해 검색하는 것
 * POST는 내용을 넣어서 요청 - 회원가입을 할때 입력값을 함께 보낼때 사용
 * 입력 - http://127.0.0.1:50000/?soju=grilledpork&beer=chicken
 *
 */
const http = require('http');
const url = require('url');

http.createServer((request, response) => {
  const get = url.parse(request.url, true).query;

  if (request.method === 'GET') {
    response.writeHead(200, { 'Context-Type': 'text/html' });
    response.end(`<h1>${JSON.stringify(get)}</h1>`);
    console.log(`${request.method}방식의 요청입니다`);
  } else if (request.method === 'POST') {
    console.log(`${request.method}방식의 요청입니다`);
  }
}).listen(50000, () => {
  console.log('서버가 동작 중입니다, http:// .0.0.1:50000');
});
