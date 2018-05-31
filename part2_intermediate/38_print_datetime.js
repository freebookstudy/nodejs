/**
 * 날짜 시간 출력하기
 */
const date = new Date(2017, 8, 3, 18, 20, 30);
console.log('date : %s', date.toLocaleString());
console.log('LocaleDateString : %s', date.toLocaleDateString());
console.log('LocaleTimeString : %s', date.toLocaleTimeString());

console.log('year : %s', date.getFullYear());
//월은 0부터 11까지 세기 때문에 출력할 때는 +1
console.log('month : %s', date.getMonth() + 1);
console.log('date : %s', date.getDate());
console.log('hours : %s', date.getHours());
console.log('minutes : %s', date.getMinutes());
console.log('seconds : %s', date.getSeconds());
