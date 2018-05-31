/**
 * 정규 표현식(regexp) {0,1} 중괄호
 * 
 */
const string = '<h1>특별가 - </h1><h2>99,000원</h2>';
const stringDiv = '<div>특별가 - </div><h2>99,000원</h2>';
// 어떤 한 글자가 0개일 수도 있고 1개일 수도 있다
const replaceH1 = string.replace(/<.{0,1}h1>/g, '');
// <로 시작하고 .어떤 글자가 0~4개가 있고 >로 끝나는 패턴
const replaceTags = stringDiv.replace(/<.{0,4}>/g, '');

console.log(replaceH1);
console.log(replaceTags);
