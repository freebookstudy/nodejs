/**
 * 정규 표현식 .match()
 * 원하는 패턴으로 문자열에서 필요한 부분을 추출
 */
const text = 'hello my name is kyeongrok';
//알파벳 a~l까지 1개 이상 3개 이하의 문자열을 추출
const matched = text.match(/[a-l]{1,3}/g);

console.log(matched);
