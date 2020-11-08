/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const { TreeNode, ListNode, runScript } = require('leetcode-class')
var isSymmetric = function (root) {
  const match=(left,right) => {
    if(!left && !right){
      return true
    }if(left && right){
       return left.val==right.val &&
        match(left.left,right.right)&&
        match(left.right,right.left)
      
  }
      return false

  }
  return !root||match(root.left,root.right)
};
console.log(isSymmetric(TreeNode.create(root = [1, 2, 2, 3, 4, 4, 3])))