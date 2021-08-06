/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  //nums.splice(0, 0, ...nums.splice(nums.length - k))
  const len = nums.length - 1;
  const newnums = new Array(len + 1).fill(0)
  for (let i = 0; i <= len; i++) {
    newnums[(i + k) % len] = nums[i]
  }
  for (let i = 0; i <= len; i++) {
    nums[i] = newnums[i]
  }
};
// @lc code=end

