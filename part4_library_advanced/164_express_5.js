/**
 * express 모듈 5 - static 미들웨어
 * static 미들웨어를 활용해 손쉽게 이미지파일, js파일, css파일을 처리
 */
// static 미들웨어
// express 모듈 불러오기
const express = require('express');

// express 객체 생성
const app = express();

console.log(`${__dirname}`);

//__dirname을 통해 폴더위치 설정, 이미지 파일 multimedia 폴더에 복사
app.use(express.static(`${__dirname}/multimedia`));
app.use((request, response) => {
  response.writeHead('200', { 'Content-Type': 'text/html;charset=utf8' });
  response.end('<img src="/newyork.jpg" width="100%"/>');
});

app.listen(3000, () => {
  console.log('Server is running port 3000!');
});
