/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
let resultArr = [1];
for (let i = 0; i < rowIndex; i++) {
  resultArr.unshift(0);
  const midIndex = Math.floor((i + 1) / 2);
  for (let j = 0; j < i + 1; j++) {
    if (j > midIndex) {
      resultArr[j] = resultArr[midIndex + ((i + 1) % 2) - (j - midIndex)];
      continue;
    }
    resultArr[j] = resultArr[j] + resultArr[j + 1];
  }
}
return resultArr;
};
// @lc code=end

