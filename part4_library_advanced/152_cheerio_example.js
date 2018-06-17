/**
 * cheerio 이용해서 필요한 부분 추출하기
 */
const cheerio = require('cheerio');
//크롤러 모듈 로드
const crawler = require('./crawler');

const parse = (decodedResult) => {
  // console.log(decodedResult);
  const $ = cheerio.load(decodedResult);
  const titles = $('h3.r').find('a');
  // console.log(titles);
  for (let i = 0; i < titles.length; i += 1) {
    const title = $(titles[i]).text();
    console.log(title);
  }
};

crawler.crawl(parse)({ q: '서울대입구역 맛집' });
