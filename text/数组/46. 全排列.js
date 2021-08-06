/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  //回溯+dfs
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
      if (used[i]) {
        continue
      }
      path.push(nums[i])
      used[i] = true
      helps(path)
      path.pop()
      used[i] = false
    }
  }
  helps([])
  return res
};
console.log(permute(nums = [1, 2, 3]));