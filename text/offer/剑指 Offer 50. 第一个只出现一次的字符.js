/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  if(s==null) return" "
  const i=0
  let j=s.length
  while(i<j){
    for(j;j>=0;j--){
      if(s[j]!=s[i]){
        return s[i]
        break;
      }else{
        i++
      }
    }
  }
};