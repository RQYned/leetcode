/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  // const res = []
  // function traversal(root, depth) {
  //   if (root !== null) {
  //     res[depth] = []||res[depth]
  //     res[depth].push(root.val)
  //     traversal(root.left, depth + 1)
  //     traversal(root.right, depth + 1)
  //     }
  // }
  // traversal(root, 0)
  // return res
   const res = []
   var dep = function (node, depth) {
     if (!node) return
     res[depth] = res[depth] || []
     res[depth].push(node.val)
     dep(node.left, depth + 1)
     dep(node.right, depth + 1)
   }
   dep(root, 0)
   return res.reverse()

};
// @lc code=end

