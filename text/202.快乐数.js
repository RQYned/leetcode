/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
   let slow = sum(n)
   let fast = sum(slow)
   while (slow != fast) {
     slow = sum(slow)
     fast = sum(sum(fast))
   }
   return slow == 1
   }

   function sum(n) {
     n = n + ''
     let sum = 0
     for (let num of n) {
       sum += num * num
     }
     return sum

//快慢指针
};
// @lc code=end

