/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
 if (x < 10) {
   return x >= 0;
 }
 let n = 10 ** Math.floor(Math.log10(x));
 while (n > 1 && x > 0) {
   if (x % 10 !== Math.floor(x / n)) {
     return false;
   }
   x = Math.floor((x % n) / 10);
   n /= 100;
 }
 return true;

};
// @lc code=end

