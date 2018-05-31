/**
 * 배열 shift(), unshift()
 */
const destination = ['런던', '파리', '로마'];

console.log(destination);

// shift() 배열의 첫 번째 값을 제거
console.log(destination.shift());
console.log(destination);

// unshift() 첫 번째 배열에 추가
destination.unshift('뉴욕');
console.log(destination);
