/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
// 序列dp+hash
let ans =0;
const n = nums.length;
const map= new Map()
 for (let i = 0; i < n; ++i) {
   map[i] = new Map();
 }
 for (let i = 0; i < n; ++i) {
   for (let j = 0; j < i; ++j) {
     const d = nums[i] - nums[j];
     const cnt = map[j].get(d) || 0;
     ans += cnt;
     map[i].set(d, (map[i].get(d) || 0) + cnt + 1);
   }
 }
 return ans;
};
console.log(numberOfArithmeticSlices(nums = [2, 4, 6, 8, 10]))