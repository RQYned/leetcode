/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
//差分数组
const diff = new Array(52).fill(0)
for(const [l,r] of ranges ){
  diff[l]++
  diff[r+1]--
}
console.log(diff)
//前缀和
let sum=0
for(let i=0;i<=51;i++){
  sum+=diff[i]
  if(left<=i&&right>=i&&sum<=0){
    return false
  }
}
return true
};
console.log(isCovered(ranges = [
  [1, 2],
  [3, 4],
  [5, 6]
], left = 2, right = 5))