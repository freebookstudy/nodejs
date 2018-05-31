/**
 * 부호 함수 sign()
 * 실수 범위값의 부호가 +이면 1 -이면 -1
 * 0이면 0
 */
const sign1 = Math.sign([3]); //  1
const sign2 = Math.sign(-3); // -1
const sign3 = Math.sign('-3'); // -1
const sign4 = Math.sign(0); //  0
const sign5 = Math.sign(NaN); // NaN
const sign6 = Math.sign('foo'); // NaN
const sign7 = Math.sign(); // NaN
const sign8 = Math.sign(3/0); // Infinity - 1
const sign9 = Math.sign(3/-0); // -Infinity -1

console.log('sign1:', sign1);
console.log('sign2:', sign2);
console.log('sign3:', sign3);
console.log('sign4:', sign4);
console.log('sign5:', sign5);
console.log('sign6:', sign6);
console.log('sign7:', sign7);
console.log('sign8:', sign8);
console.log('sign9:', sign9);