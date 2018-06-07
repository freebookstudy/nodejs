/**
 * 파일 내용 수정하기
 */
const fs = require('fs');

fs.readFile('./message.txt',(err, data) => {
  if(err) throw err;
  let contents = data.toString();
  contents = 'replaced2';
  fs.writeFile('./message.txt', contents, () => console.log(contents));
})