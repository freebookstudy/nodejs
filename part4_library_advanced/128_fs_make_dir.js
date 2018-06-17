/**
 * 디렉토리 만들기 fs.mkdirSync()
 * 절대경로 - 고유한 경로로 루트 디렉토리까지의 모든 경로(path)
 * 상대경로 - 현재 자신이 있는 위치 디렉토리를 기준으로 상위 디렉토리인지 하위 디렉토리인지 나타내는 방법
 */
const fs = require('fs');

//${__dirname} 실행 환경 디렉토리의 절대경로를 받아옴
const dirName = `${__dirname}/img`;
console.log('dirName: ', dirName);

//dirName에서 지정한 디렉토리가 있는지 확인
console.log(!fs.existsSync(dirName));
if (!fs.existsSync(dirName)) {
  //없으면 생성
  fs.mkdirSync(dirName);
}