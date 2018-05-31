/**
 * 정규 표현식(regexp)[]
 * 여러 가지 기호들이나 문자를 모두 매칭
 */
const string = '(<h1>:::특별가 - 99,000원:::</h1>)';

//() 를 없앰
const replacedBracket = string.replace(/[()]/g, '');
//()/- 를 없앰 -가 정규표현식에서 연산자이므로 \기호를 붙임
const replacedBracketOrSlashHyphenComma = string.replace(/[()/\-,]/g, '');

console.log('바꾸기 전 ---->', string);
console.log('()없애기 ---->', replacedBracket);
console.log('/-없애기 ---->', replacedBracketOrSlashHyphenComma);
