/**
 * Promise.all()을 이용해 후처리하기
 * 여러 개의 비동기 처리가 모두 끝난 후에 특정 로직을 실행하고 싶다면
 * Promise.all()을 이용
 */
const promiseFirst = new Promise(resolve => resolve(1))
  .then(result => `${result + 10}`);

const promiseSecond = new Promise(resolve => resolve(2))
  .then(result => `${result + 20}`);

Promise.all([promiseFirst, promiseSecond]).then((result) => {
  console.log('result:', result);
  console.log('sum:', Number(result[0]) + Number(result[1]));
});
