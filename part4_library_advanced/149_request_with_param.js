/**
 * request로 파라미터 추가해 호출하기
 * http 요청(request)를 보낼 때 파라미터를 같이 보내려면 qs:{}라는 프로퍼티(property)를 사용
 * qs는 쿼리스트링(query string)
 */
const request = require('request');

request({
  url: 'https://www.google.com/search',
  method: 'GET',
  qs: { q: '신사역 맛집' },
}, (error, response, body) => console.log(body));
