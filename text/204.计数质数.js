/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
 let count = 0;
 let signs = new Uint8Array(n);

 for (let i = 2; i < n; i++) {
   if (!signs[i - 1]) {
     count++;

     for (let j = i * i; j <= n; j += i) {
       signs[j - 1] = true;
     }
   }
 }
 return count;
};
// @lc code=end

