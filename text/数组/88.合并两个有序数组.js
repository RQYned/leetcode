/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  //  let len1 = m - 1;
  //  let len2 = n - 1;
  //  let len = m + n - 1;
  //  while (len1 >= 0 && len2 >= 0) {
  //    // 注意--符号在后面，表示先进行计算再减1，这种缩写缩短了代码
  //    nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
  //  }

  //  function arrayCopy(src, srcIndex, dest, destIndex, length) {
  //    dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length));
  //  }
  //  // 表示将nums2数组从下标0位置开始，拷贝到nums1数组中，从下标0位置开始，长度为len2+1
  //  arrayCopy(nums2, 0, nums1, 0, len2 + 1);
    let index1 = m - 1
    let index2 = n - 1
    let tail = m + n - 1
    while (index2 >= 0) {
      if (nums1[index1] > nums2[index2]) {
        nums1[tail] = nums1[index1]
        index1--
        tail--
      } else {
        nums1[tail] = nums2[index2]
        index2--
        tail--
      }
    }
    //两种解法都是考虑从后向前，不过第二种更优

};
// @lc code=end

