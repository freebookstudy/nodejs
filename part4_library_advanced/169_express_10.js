/**
 * express 모듈 10 - connect-multiparty 미들웨어
 * 파일 전송시 multipart/from-data 인코딩 방식 사용
 * 일반적인 방식 application/x-www-form-urlencoded 인코딩 방식
 * body parser 미들웨어는 multipart/form-data 지원하지 않음
 * app.use(body.urlencoded({extended:false}));
 *
 * multer, connect-multiparty, connect-busboy
 */
// connet-muliparty 미들웨어

// 모듈 추출
const express = require('express');
const fs = require('fs');
//multipart/from-data 인코딩을 지원해주는
const multipart = require('connect-multiparty');

const app = express();

// 미들웨어 설정
app.use(multipart({ uploadDir: `${__dirname}/upload` }));

app.get('/', (request, response) => {
  fs.readFile('connect-multiparty.html', (error, data) => {
    response.send(data.toString());
  });
});

app.post('/', (request, response) => {
  const imgFile = request.files.image;
  const outputPath = `${__dirname}/upload/${Date.now()}_${imgFile.name}`;
  console.log('outputPath : ',outputPath);
  console.log('body : ',request.body);
  console.log('files : ',request.files);
  fs.rename(imgFile.path, outputPath, () => {
    response.redirect('/');
  });
});

app.listen(3000, () => {
  console.log('Server is running port 3000!');
});
