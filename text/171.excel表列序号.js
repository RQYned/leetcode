/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s='AB') {

  let sum = 0,
    i = s.length - 1,
    carry = 1;

  while (i >= 0) {
    let cur = s[i].charCodeAt() - 64;
    console.log(cur)
    sum += cur * carry;
    carry *= 26;
    i--;
  }

  return sum;

};
// @lc code=end
console.log(titleToNumber())