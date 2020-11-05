/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
   if (needle === "") return 0
   for (var i = 0; i < haystack.length; i++) {
     if (haystack[i] === needle[0]) {
       if (haystack.substring(i, i + needle.length) === needle) return i;
     }
   }
   return -1//sustring 方法
};
//return haystack.indexOf(needle) indexOf方法
// @lc code=end

