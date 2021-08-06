/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
 let res=[];
 const len=s.length;
 let num=1;
 for(let i=0;i<len;i++){
   if(i===len-1 || s[i]!==s[i+1]){
     if(num>=3){
       res.push([i- num +1,i])
     }
     num=1
   }else{
     num++
   }
 }
 return res;
};
console.log(largeGroupPositions(s = "abbxxxxzzy"))