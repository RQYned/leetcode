/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i=nums.length-2
  while(i>=0 && nums[i]>=nums[i+1]){
    i--
  }
  if(i>=0){
    let j=nums.length-1
    while(j>=0&&nums[i]>=nums[j]){
      j--
    }
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }
  let k=i+1
  let r=nums.length-1
  while(k<r){
    [nums[k],nums[r]] = [nums[r],nums[k]]
    r--
    k++
  }
  
};
console.log(nextPermutation(nums = [5, 4, 7, 5, 3, 2]))