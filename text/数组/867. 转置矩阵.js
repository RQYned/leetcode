/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length
  const temp = new Array(n).fill(0).map(() => new Array(m).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      temp[j][i] = matrix[i][j]
    }
  }
  return temp
};