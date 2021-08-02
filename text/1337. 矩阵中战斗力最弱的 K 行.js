/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  let length = mat.length - 1
  let res = []
  for (let i = 0; i <= length; ++i) {
    let cur = 0
    for (let j = 0; j < mat[0].length; ++j, ++cur) {
      if (mat[i][j] === 0) {
        break
      }
    }
     res.push([cur, i])
  }
  return res.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
    .slice(0, k)
    .map(item => item[1])

};
console.log(kWeakestRows(mat = [
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1]
  ],
  k = 3
))