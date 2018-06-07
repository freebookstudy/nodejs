/**
 * list를 json 형식으로 파일에 저장하기, JSON.stringify()
 */
const fs = require('fs');

const userList = [
  { name: 'kyeongrok', age: 31 },
  { name: 'jihyun', age: 31 },
];

//JSON.stringify()는 JSON 오브젝트를 JSON 문자열(String)로 변환 해줍니다.
fs.writeFile('./list.json', JSON.stringify(userList), () => console.log(userList));
// fs.writeFile('./list.json', userList, (item) => console.log(userList));
