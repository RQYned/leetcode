/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var n=nums.length
  if(target<nums[0]) return 0
  if(target>nums[n-1]) return n
  for(let i=0;i<=n;i++){
    if(nums[i]>=target){
        return i
    }
  }
};
// @lc code=end

