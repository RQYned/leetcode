/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
let ans=[]
let l=s.length
if(l%2) return false
for(let i=0;i<l;i++){
   let k=s[i]
   switch(k){
     case"(":{
      ans.push(k)
      break;
    }
     case"[":{
      ans.push(k)
      break;
    }
    case"{":{
      ans.push(k)
      break;
    }
    case")":{
      if(ans.pop() !=="(")
        return false
      break;
    }
    case"]":{
      if(ans.pop() !=="[")
        return false
      break;
    }
    case"}":{
      if(ans.pop() !=="{")
        return false
      break;
    }
   }
}
return !ans.length
};
// @lc code=end

