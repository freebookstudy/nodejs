/**
 * 한글이 깨지는 문제 해결하기
 * iconv-lite는 인코딩을 변경 해주는 모듈
 */
const request = require('request');
const iconv = require('iconv-lite');

request({
  url: 'https://www.google.com/search',
  method: 'GET',
  qs: { q: '홍준표' },
  encoding: null,
}, (error, response, body) => {
  const decodedResult = iconv.decode(body, 'euc-kr');
  console.log(decodedResult);
});
