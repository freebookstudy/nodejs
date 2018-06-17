/**
 * 파일 이름 바꾸기
 * fs.rename(from_경로_파일명, to_경로_파일명, (err) => { 에러났을 때 수행할 코드 } );
 */
const fs = require('fs');

const renameFile = (fromFilePathName, toFilePathName) => {
  fs.rename(fromFilePathName, toFilePathName, (err) => {
    if (err) console.log(`ERROR: ${err}`);
  });
};

//바꿀 대상 파일
const fromFilePathName = './hello.txt';
//바꿀 파일명
const toFilePathName = './bye.txt';

renameFile(fromFilePathName, toFilePathName);
