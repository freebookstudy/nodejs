/**
 * 중첩 for문을 이용해 구구단 출력하기
 */
for (let j = 2; j <= 9; j += 1) {
  console.log('==== %d단 시작====', j);
  for (let i = 1; i <= 9; i += 1) {
    console.log('%d * %d = %d', j, i, j * i);
  }
}
