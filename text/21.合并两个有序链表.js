/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
const res = []
const len = nums.length
nums.sort((a, b) => a - b)
const used = Array(len)//记录用过的数字
const helps = (path) => {
  if (path.length == len) {
    res.push(path.slice())//存满，放入res准备返回
    return
  }
  for (let i = 0; i < len; i++) {
      if(nums[i-1]==nums[i] && i-1>=0 && !used[i-1]){//去重
        continue
      }
      if(used[i]){
        continue
      }
      path.push(nums[i])
      used[i]=true
      helps(path)
      path.pop()
      used[i]=false
  }
}
 helps([])
 return res
};
const nums=[1,1,2,5]
console.log(permuteUnique(nums))