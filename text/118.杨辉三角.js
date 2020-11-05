/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
 const result = [];
 if (numRows <= 0) {
   return result;
 }
 let i = 0,
   j = 0;
 for (let i = 0; i < numRows; i++) {
   const subArr = [];
   for (let j = 0; j <= i; j++) {
     if (j > 0 && j < i) {
       subArr.push(result[i - 1][j - 1] + result[i - 1][j]);
     } else {
       subArr.push(1);
     }
   }
   result.push(subArr);
 }
 return result;
};
// @lc code=end

