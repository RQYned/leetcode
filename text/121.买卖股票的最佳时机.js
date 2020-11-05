/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let last = 0
   let max = 0
   for (let i = 0; i < prices.length - 1; i++) {
     last = Math.max(0, last + prices[i + 1] - prices[i])
     max = Math.max(max, last)
   }
   return max
};
// @lc code=end

