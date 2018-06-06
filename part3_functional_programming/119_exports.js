/**
 * exports
 * 프로그램 규모가 커져서 재사용 해야 할때
 * 모듈을 분리하고 다른 곳에서 불러와 쓰게 하려면 exports를 사용
 * exports한 모듈을 불러 오려면 require를 사용
 */
const printHello = () => console.log('hello');

exports.printHello = printHello;

exports.printMessage = (message) => {
  console.log(message);
};
