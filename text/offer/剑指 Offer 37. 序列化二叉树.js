/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */



/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  //先序遍历，深搜或者广搜
  //深搜递归
  if (root == null) {
    return 'A'
  }
  const left = serialize(root.left)
  const right = serialize(root.right)
  return root.val + ',' + left + ',' + right
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const list = data.split(',')
  const buildTree = (list) => {
    const rootVal = list.shift()
    if (rootVal == 'A') {
      return null
    }
    const rootNode = new TreeNode(rootVal)
    rootNode.left = buildTree(list)
    rootNode.right = buildTree(list)
    return rootNode
  }
  return buildTree(list)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

console.log(serialize([1, 2, 3, null, null, 4, 5]));
console.log(deserialize([1, 2, 3, null, null, 4, 5]));