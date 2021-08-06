/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  //摩尔投票法
  //https://leetcode-cn.com/problems/find-majority-element-lcci/solution/zhu-yao-yuan-su-by-leetcode-solution-xr1p/
  let candidate = -1
  let count = 0
  for (let num of nums) {
    if (count === 0) {
      candidate = num
    }
    if (num === candidate) {
      count++
    } else {
      count--
    }
  }
    count = 0
    const length = nums.length
    for (let num of nums) {
      if (num === candidate) {
        count++
      }
    }
    return count * 2 > length ? candidate : -1
  }
;
console.log(majorityElement([1, 2, 5, 9, 5, 9, 5, 5, 5]));