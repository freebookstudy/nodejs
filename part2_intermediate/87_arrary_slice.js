/**
 * 배열에서 필요한 부분만 뽑기 .slice()
 * 배열.slice(시작, 미만)
 */
const strings = [
  'timeoutsRemaining',
  'flagrantFouls',
  'defensive3Seconds',
  'jumpshots',
  'dunks',
  'layups',
];

const sliced = strings.slice(1, 3);
console.log('sliced:', sliced);
