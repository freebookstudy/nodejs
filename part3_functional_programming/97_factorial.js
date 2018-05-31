/**
 * 재귀함수 factorial(팩토리얼)
 * 1부터 어떤 양의 정수 n까지의 정수를 모두 곱한 것
 * 3팩토리얼은 1 * 2 * 3 수학에서 n!로 표시
 * 0의 factorial 값은 1로 항상 약속
 */
const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(4));