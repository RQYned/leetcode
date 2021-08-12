/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  // 区间DP
  const n = s.length
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0))
  for (let i = n - 1; i >= 0; i--) {
    dp[i][i] = 1
    let str1 = s[i]
    for (let j = i + 1; j < n; j++) {
      let str2 = s[j]
      if (str1 === str2) {
        dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[0][n - 1]
};
console.log(longestPalindromeSubseq(s = "bbbab"))