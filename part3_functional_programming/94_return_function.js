/**
 * 함수를 return 하기
 */
//애로우 함수를 두번 사용하는 방법을 커링(curring)라고 함
const returnFunction = () => (a, b) => a + b;

const plus = returnFunction();

console.log(plus(10, 20));
