/**
 * require
 * require()를 이용하면 다른 모듈을 불러올 수 있다
 * 내가 직접 만든 모듈뿐만 아니라 fs, http등 내장 모듈도 불러올 수 있다
 */
const printSomething = require('./119_exports');

printSomething.printHello();
printSomething.printMessage('bye');
