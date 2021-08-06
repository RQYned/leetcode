/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {
  // let ret = ''
  // ret += time[0] === '?' ? ((time[1] === '?' || time[1] < 4) ? '2' : '1') : time[0]
  // ret += time[1] === '?' ? (ret[0] === '2' ? '3' : '9') : time[1]
  // ret += ':'
  // ret += time[3] === '?' ? '5' : time[3]
  // ret += time[4] === '?' ? '9' : time[4]

  // return ret
  let res = ''
  res += time[0] === '?' ? ((time[1] === '?' || time[1] < '4') ? '2' : '1') : time[0]
  res += time[1] === '?' ? (res[0] == '2' ? '3' : '9') : time[1]
  res += ':'
  res += time[3] === '?' ? '5' : time[3]
  res += time[4] === '?' ? '9' : time[4]
  return res
};
console.log(maximumTime(time = "??:3?"))