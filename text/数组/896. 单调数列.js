/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
 let inc = true,
   dec = true;
 const n = A.length;
 for (let i = 0; i < n - 1; ++i) {
   if (A[i] > A[i + 1]) {
     inc = false;
   }
   if (A[i] < A[i + 1]) {
     dec = false;
   }
 }
 return inc || dec;
};