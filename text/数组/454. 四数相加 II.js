/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  const countAB = new Map();
  A.forEach(u => B.forEach(v => countAB.set(u + v, (countAB.get(u + v) || 0) + 1)));
  let ans = 0;
  for (let u of C) {
    for (let v of D) {
      if (countAB.has(-u - v)) {
        ans += countAB.get(-u - v);
      }
    }
  }
  return ans;

};
console.log(fourSumCount(A = [1, 2],
B = [-2, -1],
C = [-1, 2],
D = [0, 2]))