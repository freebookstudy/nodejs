/**
 * 제곱근 함수, 세제곱근 함수 sqrt(), cbrt()
 * 스퀘어루트, 큐브루트 등으로 읽는다
 */
const sqrt1 = Math.sqrt(9); // 3
const sqrt2 = Math.sqrt(1);  // 1
//0의 제곱근은 0하나 뿐
const sqrt3 = Math.sqrt(0);  // 0
//-1의 제곱근은 실수 범위에서 구할수 없으므로 NaN
const sqrt4 = Math.sqrt(-1); // NaN
const sqrt5 = Math.sqrt(2/0); // Infinity

const cbrt1 = Math.cbrt(-8); // -2
const cbrt2 = Math.cbrt(0); // 0
const cbrt3 = Math.cbrt(1); // 1
//양수를 0으로 나누면 Infinity, 음수를 0으로 나누면 -Infinity
const cbrt4 = Math.cbrt(-2/0); // Infinity

console.log('sqrt1:', sqrt1);
console.log('sqrt2:', sqrt2);
console.log('sqrt3:', sqrt3);
console.log('sqrt4:', sqrt4);
console.log('sqrt5:', sqrt5);
console.log('cbrt1:', cbrt1);
console.log('cbrt2:', cbrt2);
console.log('cbrt3:', cbrt3);
console.log('cbrt4:', cbrt4);