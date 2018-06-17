/**
 * http 모듈 - response 객체, fs 모듈 활용 1
 */

const fs = require('fs');
const http = require('http');

http.createServer((request, response) => {
  fs.readFile('./136_example.html', (error, data) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(data);
  });
}).listen(50000, () => {
  console.log('서버가 동작 중입니다, http://127.0.0.1:50000');
});
