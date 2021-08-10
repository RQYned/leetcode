/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
  //多路归并(多指针)
  let arr = new Array(n + 1).fill(1)
  let tmpPionts = new Array(primes.length).fill(1),
    nums = []
    for(let i=2;i<=n;i++){
      for(let j=0;j<primes.length;j++){
        nums[j]=arr[tmpPionts[j]]*primes[j]
      }
      arr[i]=Math.min(...nums);
      for(let k=0;k<nums.length;k++){
        if(nums[k]===arr[i]){
          tmpPionts[k]++
        }
      
      }
        nums = []
    }
return arr[n]
};
console.log(nthSuperUglyNumber(n = 12, primes = [2, 7, 13, 19]))