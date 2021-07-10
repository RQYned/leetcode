/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const len = nums.length
  const res = new Array(2).fill(0)
  nums.sort((a, b) => a - b)
  let index1 = 0
  for (let i = 0; i < len; i++) {
    const index2 = nums[i]
    if (index1 === index2) {
      res[0] = index1
    } else if (index2 - index1 > 1) {
      res[1] = index1 + 1
    }
    index1 = index2
  }
  if (nums[len - 1] !== len) {
    res[1] = len
  }
  return res

};
console.log(findErrorNums([1, 2, 2]))