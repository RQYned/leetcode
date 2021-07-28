/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
  return find(root, root.val)
};
var find = (root, val) => {
  if (root == null) {
    return -1
  }
  if (root.val > val) {
    return root.val
  }
  let left = find(root.left, val)
  let right = find(root.right, val)
  if (left > val && right > val) {
    return Math.min(left, right)
  }
  return Math.max(left, right)
}