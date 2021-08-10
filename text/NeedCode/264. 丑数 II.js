/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  //小顶堆||多路并归（多指针）
  const ans = new Array(n + 1).fill(0)
  ans[1] = 1;
  for (let i2 = 1, i3 = 1, i5 = 1, idx = 2; idx <= n; idx++) {
    let a = ans[i2] * 2,
      b = ans[i3] * 3,
      c = ans[i5] * 5;
      let min = Math.min(a,b,c)
      if(min===a) i2++;
      if (min ===b) i3++;
       if(min === c) i5++;
       ans[idx]=min;
  }
return ans[n]
};
console.log(nthUglyNumber(10))