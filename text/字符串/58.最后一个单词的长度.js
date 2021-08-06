/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var n=s.length
  var count=0
if(s==null||n==0) return 0
for (let i=n-1;i>=0;i--){
  if(s.charAt(i)==" "){
    if(count==0) continue
    break
  }
  count++
}
return count
};
// @lc code=end

