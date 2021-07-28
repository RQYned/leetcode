/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  //二分
  let left = 0,
    right = nums.length - 1
  // let mid = Math.floor((right+left)/2)
  while (left <= right) {
    let mid = Math.floor((right + left) / 2)
    if (nums[mid] == target) {
      return mid
    } else if (nums[mid] < nums[right]) {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    } else {
      if (nums[mid] > target && target <= nums[left]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    return mid + 1
  }
  return -1
};
console.log(search(nums = [4, 5, 6, 7, 0, 1, 2], target = 0))