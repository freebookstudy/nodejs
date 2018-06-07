/**
 * 동기로 파일 열기
 * fs.readFileSync()
 * 동기적 읽기 함수로, 함수가 실행되면 해당 파일을 읽으면서 다른 작업을 동시에 할 수 없게 됨
 */

const fs = require('fs');

const data = fs.readFileSync('./message.txt');
const string = data.toString();
console.log('sync work01');
console.log(string);
