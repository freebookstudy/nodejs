/**
 * 파일을 json 형식으로 불러오기, JSON.parse()
 */
const fs = require('fs');

fs.readFile('./list.json', (err, data) => {
  if(err) throw err;
  const json = JSON.parse(data.toString());
  console.log(json);
  console.log('name:', json[0].name);
  console.log('name:', json[1].name);
});