/**
 * 커링 curring 예제 1
 * 커링은 파라미터를 여러 개 받는 함수를 분리해서 파라미터로 값이 모두 들어오면 값을 반환하고
 * 부족하게 들어오면 함수를 반환하는 기법
 */
const coffeeMachine = liquid => espresso => `${espresso}+${liquid}`;

const americanoMachine = coffeeMachine('water');
const latteMachine = coffeeMachine('milk');

const americano = americanoMachine('coffee bean');
const latte = latteMachine('coffee bean');

console.log(americano);
console.log(latte);
