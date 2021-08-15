/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, maxMove, startRow, startColumn) {
  const MOD = 1000000007
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ]
  let count = 0;
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
  dp[startRow][startColumn] = 1
  for (let i = 0; i < maxMove; i++) {
    const dpNew = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let j = 0; j < m; j++) {
      for (let k = 0; k < n; k++) {
        const num = dp[j][k];
        if (num > 0) {
          for (const direction of directions) {
            let j1 = j + direction[0],
              k1 = k + direction[1]
            if (j1 >= 0 && j1 < m && k1 >= 0 && k1 < n) {
              dpNew[j1][k1] = (dpNew[j1][k1] + num) % MOD
            } else {
              count = (count + num) % MOD
            }
          }
        }
      }
    }
    dp = dpNew
  }
  return count
};
console.log(findPaths(m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0))