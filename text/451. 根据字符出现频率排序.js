/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  //解题思路，首先要遍历字符串，统计每个字符出现的次数，
  //根据统计次数重新排列字符串

  //用map统计字符出现的次数

  let map = new Map()
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1)
  }
  //排序
  const list = [...map.keys()];
  list.sort((a, b) => map.get(b) - map.get(a));
  //

  const sb = [];
  const size = list.length;
  for (let i = 0; i < size; i++) {
    const c = list[i];
    const frequency = map.get(c);
    for (let j = 0; j < frequency; j++) {
      sb.push(c);
    }
  }
  return sb.join('');
};
console.log(frequencySort('aad'))