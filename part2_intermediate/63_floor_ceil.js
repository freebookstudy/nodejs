/**
 * 바닥함수, 천장함수 floor(), ceil()
 * floor() 바닥함수로 같거나 작은 가장 가까운 정수 리턴
 * ceil() 천장함수로 같거나 큰 가장 가까운 정수 리턴
 */
const floor1 = Math.floor(45.95); //  45
const floor2 = Math.floor(4); //   4
const floor3 = Math.floor(NaN); //   NaN
const floor4 = Math.floor(-45.05); // -46

const ceil1 = Math.ceil(7.004); // 8
const ceil2 = Math.ceil(-0.95); // -0
const ceil3 = Math.ceil(-4); // -4
const ceil4 = Math.ceil(-7.004); // -7

console.log('floor1:', floor1);
console.log('floor2:', floor2);
console.log('floor3:', floor3);
console.log('floor4:', floor4);
console.log('ceil1:', ceil1);
console.log('ceil2:', ceil2);
console.log('ceil3:', ceil3);
console.log('ceil4:', ceil4);
