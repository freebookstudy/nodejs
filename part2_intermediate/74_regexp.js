/**
 * 정규 표현식(regexp) '/' 이스케이프
 * '/<정규표현식>/g' 문자열 전체에서 해당 부분 찾기
 */
const string = '<h1>:::특별가 - 99,000원:::</h1>';
const result1 = string.replace(/<h1>/g, '');
console.log('result1:', result1);

const result2 = string.replace(/<h1>/g, '').replace(/<\/h1>/g, '');
console.log('result2:', result2);
