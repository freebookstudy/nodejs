/**
 * node-schedule 모듈 1
 * 유용한 Job scheduler 외부 모듈
 * 이 모듈을 통해서 특정 날짜 및 시간에 scheduled job을 실행
 * 해당 Job를 한 번 또는 반복으로 설정해서 사용
 * interval-bases-scheduling 이 아닌 time-based-scheduling 임
 * setInterval() 은 설정된 주기마다 특정함수가 실행
 * node-schedules는 특정 시간에 실행되어야 할 때 적합
 *
 * 만약 어떤 schedule job이 script가 실행되지 않을 때도 지속되어야 한다면
 * node-cron 모듈을 사용하는 것을 고려하는 것이 좋다
 * https://github.com/kelektiv/node-cron
 */
const schedule = require('node-schedule');

// 특정시간에 한번
// 2017년 12월 16일 오후 19시 27분에 수행할 작업
const date = new Date(2018, 5, 17, 23, 58, 0);

// 2017-12-16T10:27:00.000Z (GMT 0 기준)
console.log(date);

//schedule.scheduleJob()에 date 객체의 특정 시간을 전달
//특정 시간에 한번만 실행
const j = schedule.scheduleJob(date, () => {
  console.log('no pain, no gain');
});

// 매시간마다 한번 (매시간 17분마다)
const rule = new schedule.RecurrenceRule();
rule.minute = 58;

const k = schedule.scheduleJob(rule, () => {
  console.log('Laziness is nothing more than the habit of resting before you get tired.');
});

// 작업 취소
// j.cancel();
// k.cancel();
