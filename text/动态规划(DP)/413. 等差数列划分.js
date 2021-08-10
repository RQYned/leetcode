/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  //动态规划
  if (nums.length < 3 || nums == null) {
    return 0
  }
  let res = 0,
    tmpAdd = 0;
  for(let i=2;i<nums.length;i++){
    if(nums[i]-nums[i-1]==nums[i-1]-nums[i-2]){
      res+=++tmpAdd
    }else{
      tmpAdd=0
    }
  }
  return res
};
console.log(numberOfArithmeticSlices(nums = [1, 2, 3, 4]))