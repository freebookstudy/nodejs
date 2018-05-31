/**
 * yyyy-MM-dd 형식으로 날짜 출력하기
 */
const getYymmdd = (date) => {
  const yyyy = date.getFullYear();
  //월은 0~11로 표시되므로 +1을 해준다 9에서 +1을 해주면 10이므로 9보다 작으면 앞에 0을 붙인다
  const mm = date.getMonth() < 9 ? `0${date.getMonth()+1}` : (date.getMonth()+1);
  console.log('date.getMonth(): %s, mm: %s', date.getMonth(),mm);
  const dd = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  console.log('dd:',dd);
  return `${yyyy}-${mm}-${dd}`;
};

const yyyymmdd = getYymmdd(new Date());
//설정하고 자하는 월-1로 셋팅
const yyyymmdd170909 = getYymmdd(new Date(2017, 9-1, 10));
console.log('yyyymmdd:', yyyymmdd);
console.log('yyyymmdd170909:', yyyymmdd170909);
