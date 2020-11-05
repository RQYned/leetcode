/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var count=0
  var n=nums.length
  for(let i =1;i<=n;i++){
    if(nums[i]!=nums[i-1]){
      nums[i-count]=nums[i]
    }else{
      count++
    }
  }
  return n-count
};
// @lc code=end

