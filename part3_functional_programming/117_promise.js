/**
 * 프로미스 promise
 * 비동기 처리는 자원을 효율적으로 사용하고 속도를 높으닌 방법으로 많이 사용
 * 비동기로 실행할 때는 리턴값이 없는 콜백함수를 많이 사용
 * 함수형 프로그래밍은 return값이 없는 프로그래밍 방식
 * 그래서 callback(콜백)함수를 써서 다음에 실행할 함수를 파라미터로 넘겨주는 방식 사용
 */
const promiseResult = new Promise((resolve) => {
  resolve(1); // 핵심은 첫번째는 resolve() 를 쓴다는 것.
}).then((result) => {
  console.log('first:', result);
  return `${result}hello`;
}).then((result) => {
  console.log('second:', result);
  return `${result}nello`;
});

promiseResult.then(result => console.log(result));
