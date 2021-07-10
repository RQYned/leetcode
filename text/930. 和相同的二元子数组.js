/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  //哈希表
  let sum = 0
  const map = new Map()
  let res = 0
  for (const num of nums) {
    map.set(sum, (map.get(sum) || 0) + 1)
    console.log(map)
    sum += num
    res += map.get(sum - goal) || 0
    console.log(res)
  }
  return res
};
console.log(numSubarraysWithSum(nums = [1, 0, 1, 0, 1], goal = 2));