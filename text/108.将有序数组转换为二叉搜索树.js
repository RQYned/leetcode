/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
if (!nums.length) return null;
const root = new TreeNode(null);

if (nums.length > 1) root.left = sortedArrayToBST(nums.splice(0, nums.length / 2));
root.val = nums[0];
root.right = sortedArrayToBST(nums.splice(1));
return root;
};
// @lc code=end

