//request 모듈을 불러움
const request = require('request');
//인코딩을 iconv-lite로 변환 해줌
const iconv = require('iconv-lite');
//charset 값을 알게 해줌
const charset = require('charset');

const crawl = callback => queryString => request({
  url: 'https://www.google.com/search',
  encoding: null, //한글 깨지는 문제 해결을 위해 null
  method: 'GET',
  qs: queryString, //크롤러를 이후 사용할 때 인자로 전달되는 값을 이용
  timeout: 10000, //10초이후 응답 포기
  followRedirect: true, //리다이렉션할 경우 사이트 이동을 허용할 것인지 체크
  maxRedirects: 10, //최대 몇 번 할지 설정할 수 있도록함
},
(error, response, body) => {
  //서버가 요청을 제대로 처리하여 해당 페이지 다운이 완료 되었을때 200
  if (!error && response.statusCode === 200) {
    //헤더 정보에서 인코딩 정보 받아옴
    const enc = charset(response.headers, body);
    //깨짐 방지를 위해 iconv로 body를 디코드
    const decodedResult = iconv.decode(body, enc);
    //해당 결과 콜백
    callback(decodedResult);
  } else {
    console.log(`error${response.statusCode}`);
  }
});

module.exports.crawl = crawl;
