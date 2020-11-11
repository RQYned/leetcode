/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let res=nums[0]
  for(let i=1; i<nums.length ; i++){
    if(nums[i-1]>0)
        nums[i] += nums[i-1]
        res= Math.max(res,nums[i])
  }
  return res
};
console.log(maxSubArray(nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]))