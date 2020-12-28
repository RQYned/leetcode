/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if(!nums.length) return [-1,-1]
  let left = 0
  let right = nums.length-1
  let mid

  while(left<=right){
     mid = Math.floor((left + right)/2);
    if(nums[mid] > target)  right = mid - 1
    if(nums[mid] < target)  left = mid + 1
    if(nums[mid]===target) break 
  }
  if(left> right) return [-1,-1]
  let i=mid,j=mid
  while (nums[i] === nums[i - 1]) i--;
  while (nums[j] === nums[j + 1]) j++;
  return [i, j];
};
console.log(searchRange(nums = [5, 7, 7, 8, 8, 10], target = 8))