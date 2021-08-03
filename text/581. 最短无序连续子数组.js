/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  //双重循环遍历，从左向右记录大的节点，从右向左记录小的节点
  let length = nums.length
  if (length <= 0) return 0
  let cur = 0,
    last = length - 1,
    max = nums[0],
    min = nums[length - 1]
  for (let i = 1; i < length; i++) {
    max = Math.max(nums[i], max)
    min = Math.min(nums[length - 1 - i], min)
    if (nums[i] < max) {
      cur = i
    }
    if (nums[length - 1 - i] > min) {
      last = length - 1 - i
    }
  }
  return cur > last ? cur - last + 1 : 0
};
console.log(findUnsortedSubarray(nums = [2, 6, 4, 8, 10, 9, 15]))