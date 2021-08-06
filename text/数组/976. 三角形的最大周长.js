/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function (A) {
  A.sort((a, b) => b - a)
  while (A.length >= 3) {
    if (A[0] >= A[1] + A[2])
      A.shift()
    else return A[0] + A[1] + A[2]
  }
  return 0

}