/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
//排序+贪心算法
nums.sort((a,b)=>a-b)
let len=nums.length-1
let res = nums[0]+nums[len]
for(let i=0,j=len;i<=j;i++,j--){
  res = Math.max(res,nums[i]+nums[j])
}
return res
};