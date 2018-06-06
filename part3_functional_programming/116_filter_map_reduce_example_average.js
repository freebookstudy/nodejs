/**
 * .filter, .map(), .reduce() 함수 예제 - 평균구하기
 */
const students = [
  { name: 'kyeongrok', age: 31, score: 85 },
  { name: 'jihyun', age: 31, score: 95 },
  { name: 'minsup', age: 35, score: 76 },
  { name: 'dasom', age: 24, score: 84 },
  { name: 'yuna', age: 26, score: 54 },
  { name: 'mattheue', age: 29, score: 34 },
];

// 21이상 30미만 점수 평균 구하기
const between21to30StudentsAverage = students
  .filter(student => student.age >= 21 && student.age < 30)
  .map(student => student.score)
    //previous - 배열의 첫 번째 파라미터 혹은 초기값(initialValue)
    //current는 배열 내 현재 처리되고 있는 값
    //index는 현재 처리되고 있는 값의 인덱스
    //array는 현재 사용되고 있는 배열
    //reduce의 초기값이 0이라 0부터 시작
  .reduce((previous, current, index, array) => previous + (current / array.length), 0);

console.log('average:', between21to30StudentsAverage);
