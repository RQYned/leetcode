/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  //双指针
  const str = [];
  const n = nums.length;
  let i = 0;
  while (i < n) {
    const low = i;
    i++;
    while (nums[i] == nums[i - 1] + 1 && i < n) {
      i++;
    }
    const high = i - 1;
    const temp = ['' + nums[low]];
    if (low < high) {
      temp.push('->');
      temp.push('' + nums[high]);
    }
    str.push(temp.join(''));
  }
  return str;
};

console.log(summaryRanges(nums = [0, 1, 3, 4, 5, 7, 8, 9]))