/**
 * http 모듈 - response 객체, fs 모듈 활용 2
 * MIME 형식
 * text - text/plain, text/html, text/css, text/javasript
 * 텍스트를 포함하는 모든 문서를 나타내며 이론상으로는 인간이 읽을 수 있어야 함
 *
 * image - image/git, image/png, image/jpeg, image/bmp, image/webp
 * 모든 종류의 이미지를 나타냄. (animated git처럼) 애니메이션되는 이미지가 이미지
 * 타입에 포함되긴 하지만, 비디오는 포함되지 않음
 *
 * audio - audio/midi, audio/mpeg, audio/webm, audio/ogg, audio/wav
 * 모든 종류의 오디오 파일을 나타냄
 *
 * video - video/webm, video/ogg
 * 모든 종류의 비디오 파일을 나타냄
 */
const fs = require('fs');
const http = require('http');

http.createServer((request, response) => {
  fs.readFile('./newyork.jpg', (error, data) => {
    response.writeHead(200, { 'Content-Type': 'image/jpeg' });
    response.end(data);
  });
}).listen(50001, () => {
  console.log('서버가 동작 중입니다, http://127.0.0.1:50001');
});

http.createServer((request, response) => {
  fs.readFile('./Cullah_DaftPunk.mp3', (error, data) => {
    response.writeHead(200, { 'Content-Type': 'audio/mp3'});
    response.end(data);
  });
}).listen(50002, () => {
  console.log('서버가 동작 중입니다, http://127.0.0.1:50002');
})