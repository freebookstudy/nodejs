/**
 * reduce() 함수 예제
 * map, reduce 함수는 여러 데이터를 나누어 처리하여 결과를 합치는 역할
 * map 함수는 원본 데이터에서 처리 대상 데이터를 분리하여 새로운 데이터 셋을 만들어주며
 * reduce 함수는 새로운 데이터 셋을 전달된 함수를 이용하여 계산하고 결과를 추출하게 된다
 * 만약 원본 데이터를 그대로 게산에 이용한다면, 데이터에 대한 복잡한 접근, 원본 데이터 손실 가능성등
 * 여러 문제가 있을 수 있으므로 위와 같이 map reduce를 이용하는 것이 보다 바람직함
 */
const students = [
  { name: 'kyeongrok', age: 31, score: 85 },
  { name: 'jihyun', age: 31, score: 95 },
  { name: 'minsup', age: 35, score: 76 },
];

const scores = students.map(student => student.score);

const sum = scores.reduce((a, b) => a + b, 0);
console.log('sum:', sum);
