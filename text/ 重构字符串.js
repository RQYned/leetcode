/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function (S) {
  let hasharr= new Array(26).fill(0)
  for (let i=0;i<S.length;i++){
    let item=hasharr[S[i].charCodeAt()-97];
    if(item){
      item.count++
    }else{
      hasharr[S[i].charCodeAt()-97] = {name:S[i],count:1}
    }
  }
  hasharr = hasharr.filter((v)=>v!=0)
  hasharr.sort((a,b),b.count-a.count)

   let ans = []
   

};