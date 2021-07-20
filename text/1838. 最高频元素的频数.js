/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  //排序+滑窗

  nums.sort((a, b) => a - b);
  const n = nums.length;
  let total = 0,
    res = 1,
    l = 0;

  for (let r = 1; r < n; r++) {
    total += (nums[r] - nums[r - 1]) * (r - l);
    while (total > k) {
      total -= nums[r] - nums[l];
      l += 1;
    }
    res = Math.max(res, r - l + 1);
  }
  return res;

};
console.log(maxFrequency(nums = [1, 2, 4], k = 5))