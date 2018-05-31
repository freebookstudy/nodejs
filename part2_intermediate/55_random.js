/**
 * 난수 생성(random)
 */
const randomNumber = Math.random(); // 0.7483689112586123
//random은 1미만의 소숫점 값을 생성하므로 10을 곱하고 floor로 소숫점 제거해서 정수 생성
const zeroToNine = Math.floor(Math.random() * 10, 10); // 0 to 9
//0~9까지 나오므로 +1을 해줘서 0~10까지 나오도록 함
const twentyToThirty = Math.floor(Math.random() * ((30 - 20) + 1), 10) + 20; // 20 to 30
//0~9까지 나오므로 +1을 해주면 1~10
const oneToTen = Math.floor(Math.random() * 10, 10) + 1; // 1 to 10
const makeRandom = (min, max) => Math.floor(Math.random() * ((max - min) + 1), 10) + min;

console.log(randomNumber);
console.log('zeroToNine:', zeroToNine);
console.log('oneToTen:', oneToTen);
console.log('twentyToThirty:', twentyToThirty);

//입력된 범위의 값이 나옴
for (let value = 1; value < 10; value += 1) {
  console.log('10 to 20:', makeRandom(10, 20));
}
