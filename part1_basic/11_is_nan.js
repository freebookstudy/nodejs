/**
 * 숫자인지 판단하기 .isNaN()
 * 숫자면 false 숫자가 아니면 True
 */
const isNaN123 = isNaN(123);
const isNaNMinus123 = isNaN(-123);
const isNaN234 = isNaN('234');
const isNaNHello = isNaN('hello');
const isNaNTest = isNaN('test');

console.log('isNaN123:', isNaN123);
console.log('isNaNMinus123:', isNaNMinus123);
console.log('isNaN234:', isNaN234);
console.log('isNaNHello:', isNaNHello);
console.log('isNaNTest:',isNaNTest);

