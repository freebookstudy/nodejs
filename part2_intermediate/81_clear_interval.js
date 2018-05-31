/**
 * 정기적으로 실행 취소하기
 * clearInterval(fn)
 */
// 1초에 1번씩 'hello'출력하기
const playInterval = setInterval(() => console.log('hello'), 1000);

setTimeout(() => { clearInterval(playInterval); }, 5000);
