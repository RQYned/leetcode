/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const counts = new Array(26).fill(0)
  for(const n of s){
    counts[n.charCodeAt(0) - 97]++
  }
  for(let i = 0; i < s.length; i++){
    if(counts[s[i].charCodeAt(0) - 97] == 1){
      return i
    }
  }
  return -1
};