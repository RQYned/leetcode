/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
let res = "";
while (n > 0) {
  let temp = n % 26;
  n = Math.floor(n / 26);
  if (temp == 0) {
    temp = 26;
    n--;
  }
  res = String.fromCharCode(temp + 64) + res;
}
return res;

};
// @lc code=end

