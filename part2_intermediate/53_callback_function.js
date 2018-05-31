/**
 * 콜백함수 callback()
 * 체이닝(chaining) 형태
 */
const sum = (a, b) => a + b;

const printResult = (result) => {
  console.log('결과는 ', result, '입니다.');
};

const calculationAndPrint = (calculationResult, callback) => {
  callback(calculationResult);
};

calculationAndPrint(sum(10, 20), printResult);
