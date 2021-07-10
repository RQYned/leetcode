/**
 * @param {number[][]} matrix
 */
//前缀和
var NumMatrix = function (matrix) {
  let rows = 0,
    cols = 0
  if (matrix.length == 0) {
    rows = cols = 1
  } else {
    rows = matrix.length + 1
    cols = matrix[0].length + 1
  }
  const preSum = new Array(rows)
  for (let i = 0; i < rows; i++) {
    preSum[i] = new Array(cols)
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i == 0 || j == 0) {
        preSum[i][j] = 0
      } else {
        preSum[i][j] = preSum[i - 1][j] + preSum[i][j - 1] - preSum[i - 1][j - 1] + matrix[i - 1][j - 1]
      }
    }
  }
  this.preSum = preSum
};

NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return this.preSum[row2 + 1][col2 + 1] + this.preSum[row1][col1] - this.preSum[row1][col2 + 1] - this.preSum[row2 + 1][col1]
};
