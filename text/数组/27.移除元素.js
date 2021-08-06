/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var count=0
  var n=nums.length
  for(let i=0;i<=n;i++){
    if(nums[i]!=val){
      nums[i-count]=nums[i]
    }else{
      count++
    }
  }
  return n-count
};
// @lc code=end

