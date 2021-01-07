/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let fn=new Array(n+1).fill(0)
  fn[0] = 0
  fn[1] = 1
  fn[2] = 1
 
  for(let i = 3; i<=n;i++){
    fn[i]=fn[i-1] + fn[i-2]
  }
  return fn[n]
};
console.log(fib(n=0))