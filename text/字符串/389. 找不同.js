/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let ret=0
  for(let ch of s){
    ret ^=ch.charCodeAt();
  }
  for( let ch of t){
    ret  ^=ch.charCodeAt();
  }
  return String.fromCharCode(ret)
};
console.log(findTheDifference(s = "abcd", t = "abcde"))