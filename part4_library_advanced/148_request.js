/**
 * request로 구글 크롤링하기
 * 크롤링 - 프로그램이 웹 사이트를 정기적으로 돌며 정보를 추출하는 기술
 * request(옵션, 호출한_후_실행할 함수);
 * 옵션 - URL, 메소드(GET, POST) 등
 * 호출한_후_실행할 함수 - 에러(error), 응답메시지(response), 내용(body)
 */
const request = require('request');

request({
  url: 'https://www.google.com/',
  method: 'GET',
}, (error, response, body) => console.log(body));
