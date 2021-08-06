/**
 * @param {number[]} arr
 * @return {number[]}
 */
const { TreeNode, ListNode, runScript } = require('leetcode-class')
var sortByBits = function (arr) {
  function countBits (n) {
    let count = 0;
    while (n != 0) {
      count += n & 1;
      n >>= 1;
    }
    return count;
  }
  return arr.sort((a, b) => {
    return countBits(a) - countBits(b) || a - b;
  });

};
console.log(sortByBits(arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]))