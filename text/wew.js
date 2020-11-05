
const { TreeNode, ListNode, runScript } = require('leetcode-class')

function sufficientSubset (root,
  limit) {
  if (!root) return null
  const dfs =
    function (node, sum) {
      if (!node) return false
      if (!node.right && !node.left) {
        return sum + node.val >= limit
      }
      let left = dfs(node.left, sum + node.val)
      let right = dfs(node.right, sum + node.val)
      if (!left) {
        node.left = null
      }
      if (!right) {
        node.right = null
      }
      return left || right
    }
  dfs(root, 0)

  return (!root.left && !root.right) ? null : root
};

console.log(sufficientSubset(TreeNode.create([1, 2, -3, -5, null, 4, null]), -1))

console.log(sufficientSubset(TreeNode.create([5, -6, -6]), 0))


console.log(sufficientSubset(TreeNode.create([1, 2, 3, 4, -99, -99, 7, 8, 9, -99, -99, 12, 13, -99, 14]), 1))
