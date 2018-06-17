/**
 * 파일로 출력하기 fs.write()
 */
const fs = require('fs');

const contents = 'hello\nbye\n안녕';
//fs.writeFile('파일명','내용','callback')
fs.writeFile('./message.txt', contents, () => console.log(contents));