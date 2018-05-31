/**
 * 날짜 시간 생성하기 Date()
 */
const today = new Date();
//월(month)은 0부터 11까지 세므로 (원하는 월-1)을 해야됨
const date1 = new Date(2017, 9 - 1, 2);
const date2 = new Date(2017, 8, 3);
const date3 = new Date(2017, 8, 3, 18);
const date4 = new Date(2017, 8, 3, 18, 20);
const date5 = new Date(2017, 8, 3, 18, 20, 30);

console.log(today.toLocaleString());
console.log(date1.toLocaleString());
console.log(date2.toLocaleString());
console.log(date3.toLocaleString());
console.log(date4.toLocaleString());
console.log(date5.toLocaleString());
