/**
 * map() 함수 사용하기
 * .map() 함수는 배열(array)에 있는 모든 item에
 * .map(함수)의 파라미터로 받은 함수를 적용시킨 배열(array)을 리턴
 */
// define
const listEmployee = [
  { name: 'kyeongrok', age: 31, salary: 4000 },
  { name: 'jihyun', age: 31, salary: 5000 },
  { name: 'minsup', age: 35, salary: 6000 },
];

// process
const raisedSalaryList = listEmployee.map(employee => (employee.salary * 1.1));
raisedSalaryList.forEach(salary => console.log('salary : %d', salary));
