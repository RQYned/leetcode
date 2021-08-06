/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  //固定最长边，双指针遍历数组
  const length = nums.length
  if (nums == null || length < 3) {
    return 0
  }

  nums.sort((a, b) => a - b)
  let count = 0
  for (let index = length - 1; index >= 2; index--) {
    let left = 0;
    let right = index - 1;
    while(left<right){
      if(nums[left]+nums[right]>nums[index]){
        count +=right-left
        right--
      }else{
        left++
      }
    }
  }
  return count
};
console.log(triangleNumber([2, 2, 3, 4]))