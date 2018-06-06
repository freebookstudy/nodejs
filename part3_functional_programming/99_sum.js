/**
 * 재귀함수로 합계 구하기
 * 재귀함수로 배열 요소들의 합을 구하는 예제
 */
const scores = [85, 95, 76];

const sum = (list, total, length) => {
  if (length === list.length) return total;
  return sum(list, total + list[length], length + 1);
};

console.log('sum:', sum(scores, 0, 0));
