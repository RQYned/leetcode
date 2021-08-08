/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let ans = new Array(n+1).fill(0)
  ans[0] = 0,
    ans[1] = 1,
    ans[2] = 1;

  for (let i = 3; i < n+1; i++) {
      ans[i]= ans[i-2] +ans[i-1]+ans[i-3]
  }
  return ans[n]
};
console.log(tribonacci(n=4))