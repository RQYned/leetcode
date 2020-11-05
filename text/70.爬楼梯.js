/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
let nums = Array(n + 1).fill(0)
nums[0] = 0
nums[1] = 1
nums[2] = 2
for (let i = 3; i <= n; i++) {
  nums[i] = (nums[i - 1] + nums[i - 2]) 
}
return nums[n]
};
// @lc code=end

