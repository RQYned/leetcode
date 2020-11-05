/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    var str = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
    let l = 0,
      r = str.length - 1
    while (l < r) {
      if (str[l] !== str[r]) {
        return false
      }
      l++
      r--
    }
    return true

};
// @lc code=end

