/**
 * cheerio 란?
 * 웹 스크래핑(Web scraping) 모듈
 * 스크래핑은 웹 사이트에 있는 특정 정보를 추출하는 기술을 말함
 * html 형식으로 되어있는 문자열에서 태그나 다른 부분을 제외한 값들만 뽑아낼 때 사용
 */
const cheerio = require('cheerio');

const $ = cheerio.load('<html><h2 class="title">hello</h2></html>');
const titleText = $('h2.title').text();

console.log('titleText:', titleText);
