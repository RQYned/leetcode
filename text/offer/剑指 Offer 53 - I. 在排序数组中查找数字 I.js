/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let count = 0
  let len=nums.length-1
  for(let i=0;i<=len;i++){
    if(nums[i]===target){
      count++
    }
  }
  return count
};  