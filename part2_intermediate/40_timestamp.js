/**
 * Timestamp(타임스탬프)
 * 날짜와 시간을 13자리 숫자로 표현해 놓은 값
 */
const date = new Date();
const dateToTimestamp = date.getTime();
const timestampToDate = new Date(1570274211107);
const timestampToInit = new Date(1);

console.log('Date to timestamp:', dateToTimestamp);
console.log('Initial timestamp:', timestampToInit);
console.log('Timestamp to date:', timestampToDate);
