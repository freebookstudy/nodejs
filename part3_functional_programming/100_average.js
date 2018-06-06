/**
 * 재귀함수로 평균 구하기
 * 재귀함수를 이용해 평균을 구한다 배열 요소들의 합을 배열의 길이만큼 나누면 쉽게구한다
 */
const scores = [85, 95, 76];

const average = (list, total, length) => {
  if (length === list.length) return total / length;
  return average(list, total + list[length], length + 1);
};

console.log('average:', average(scores, 0, 0));
