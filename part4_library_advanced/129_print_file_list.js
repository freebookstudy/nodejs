/**
 * 파일 리스트 출력하기
 * 특정 디렉토리에 있는 파일명을 출력
 */
const testFolder = './';
const fs = require('fs');

//readdirSync() 함수는 함수의 인자로 디렉토리의 경로를 받아 해당 경로에 있는 파일 리스트를 배열로 저장하는 함수
const filenameList = fs.readdirSync(testFolder);

filenameList.forEach((fileName) => {
  console.log(fileName);
});