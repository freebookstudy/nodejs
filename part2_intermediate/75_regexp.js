/**
 * 정규 표현식(regexp) .점
 * .점 연산자는 한 개의 글자를 의미
 */
const string = '<h1>:::특별가 - </h1><h2>99,000원:::</h2>';

//<로 시작하고 .한글자 .두글자 >로 끝나는 식
const result1 = string.replace(/<..>/g, '');
//< 뒤에 ...세글자를 선택
const result2 = string.replace(/<.../g, '');
const replacedColon = string.replace(/:::/g, '');
const replacedHTag = replacedColon.replace(/<.{0,1}h1>/g, '');
const replacedSpace = replacedHTag.replace(/ /g, '');
const replacedKorean = replacedSpace.replace(/[가-힣]/g, '');
const replacedHyphen = replacedKorean.replace(/-/g, '');

console.log('<..> :',result1);
console.log('<... :',result2);
console.log(replacedColon); // 콜론 3개를 찾아서 바꾼 결과
console.log(replacedHTag); // h태그를 찾아서 바꿈
console.log(replacedSpace); // 공백
console.log(replacedKorean); // 한글
console.log(replacedHyphen); // -를 찾아서 바꿈

console.log(string.replace(':::', ''));
