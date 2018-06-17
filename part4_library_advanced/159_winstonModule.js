/**
 * winston 모듈(로그 파일)
 * npm i winston --save
 * npm i winston-daily-rotate-file --save
 * npm i moment --save
 *
 * 로거(Logger)란 로그를 출력하는 객체를 말할 때 사용하는 용어로 transports라는 속성값으로 설정 정보를 전달
 */
const winston = require('winston');
//매일 새로운 파일에 로그를 기록하도록 설정
const winstonDaily = require('winston-daily-rotate-file');
const moment = require('moment');

function tsFormat() {
  return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ');
}

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      timestamp: tsFormat,
      colorize: true,
      showlevel: true,
      level: 'debug',
    }),
    new (winstonDaily)({ //10MB가 넘어 가면 자동으로 새로운 파일을 만들고 최대5개까지 가능

      level: 'info',
      filename: 'Log/logs',
      timestamp: tsFormat,
      datePattern: '_yyyy-MM-dd.log',
      showlevel: true,
      maxsize: 1000000,
      maxFiles: 5,
    }),

  ],
  exceptionHandlers: [
    new (winstonDaily)({
      level: 'info',
      filename: 'Log/exception',
      timestamp: tsFormat,
      datePattern: '_yyyy-MM-dd.log',
      showlevel: true,
      maxsize: 1000000,
      maxFiles: 5,

    }),
    new (winston.transports.Console)({
      timestamp: tsFormat,
      colorize: true,
      showlevel: true,
      level: 'debug',
    }),
  ],
});

logger.info('인포 로깅');
logger.error('에러 로깅');
