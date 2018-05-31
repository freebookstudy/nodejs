/**
 * 밑이 자연상수(e)인 지수함수 exp(), expm1()
 * exp() 지수함수 중 밑이 자연상수인 지수함수를 구함
 * expm1 함수는 logp1함수와 역함수 관계로 exp(x) -1 과 같다
 */
const exp1 = Math.exp(-1); // 0.36787944117144233
//어떤 수의 0승은 항상 1
const exp2 = Math.exp(0); // 1
const exp3 = Math.exp(1); // 2.718281828459045

const expm1_1 = Math.expm1(-1); // -0.6321205588285577
const expm1_2 = Math.expm1(0); // 0
const expm1_3 = Math.expm1(1); // 1.718281828459045

console.log('exp1:', exp1);
console.log('exp2:', exp2);
console.log('exp3:', exp3);
console.log('expm1_1:', expm1_1);
console.log('expm1_2:', expm1_2);
console.log('expm1_3:', expm1_3);