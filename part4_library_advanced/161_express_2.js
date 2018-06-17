/**
 * express 모듈 2 - response
 * response 객체의 메소드
 * res.download(): 파일이 다운로드되도록 프롬프트합니다.
 * res.end(): 응답 프로세스를 종료합니다.
 * res.json(): JSON 응답을 전송합니다.
 * res.jsonp(): JSONP 지원을 통해 JSON 응답을 전송합니다.
 * res.redirect(): 요청의 경로를 재지정합니다.
 * res.render(): 템플릿을 렌더링합니다.
 * res.send(): 다양한 유형의 응답을 전송합니다(문자열 HTML, 객체 JSON, 배열 JSON의 형태로)
 * res.sendFile: 파일을 전송합니다.
 * res.sendStatus(): 응답 상태 코드를 설정한 후 해당 코드를 문자열로 표현한 내용을 응답 본문으로 전송합니다.
 */
const express = require('express');

const app = express();

//send() 메소드에 객체로 입력 JSON 형식으로 출력
app.get('/', (request, response) => {
  const result = [];
  const multipleNumber = 9;
  for (let i = 1; i < 5; i++) {
    result.push({
      number: `${multipleNumber}X${i}`,
      multiple: multipleNumber * i,
    });
  }
  response.send(result);
});

//status() 메소드를 활용해 상태 코드를 전달
app.get('/error', (request, response) => {
  response.status(404).send('404 ERROR');
});

app.listen(3000, () => {
  console.log('Server is running port 3000!');
});
