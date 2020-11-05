/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let low =0
  let high = numbers.length-1
  while (low < high) {
    let sum=numbers[low]+numbers[high]
    if(sum===target){
      return [low + 1,high + 1]
    }else if(sum<target){
      low++;
    }else{
      high--;
    }
  }
  return [-1, -1];
};
// @lc code=end

