/**
 * 로그함수 log(), log10(), log2(), log1p()
 * 지수함수의 역함수로 어떤 큰 값의 스케일을 줄이고 싶을 때 주로 사용함
 */
const log_1 = Math.log(10); // 2.302585092994046
//1의 로그값은 항상 0
const log_2 = Math.log(1); // 0

//밑이 10인 함수
const log10_1 = Math.log10(10000); // 4
const log10_2 = Math.log10(10); // 1

//밑이 2인 함수
const log2_1 = Math.log2(1024); // 10
const log2_2 = Math.log2(2); // 1

//밑이 e인 로그함수 어떤 수가 주어졌을 때 해당 값에 1을 더해서 그 로그 값을 구함
const log1p_1 = Math.log1p(1); // 0.6931471805599453
const log1p_2 = Math.log1p(0); // 0

console.log('log_1:', log_1);
console.log('log_2:', log_2);
console.log('log10_1:', log10_1);
console.log('log2_1:', log2_1);
console.log('log10_2:', log10_2);
console.log('log2_2:', log2_2);
console.log('log1p_1:', log1p_1);
console.log('log1p_2:', log1p_2);