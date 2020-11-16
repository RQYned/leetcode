/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {

let i=0
  let j=1
  while(i<A.length && j<A.length){
    while(i<A.length && A[i]%2==0){
      i+= 2
    }
    while(j<A.length && A[j]%2==1){
      j+= 2
    }
    if(i<A.length && j<A.length){
      [A[i],A[j]] = [A[j],A[i]]
      i += 2
      j += 2
    }
  }
  return A

};

console.log(sortArrayByParityII(A = [4, 1, 2, 1]) )