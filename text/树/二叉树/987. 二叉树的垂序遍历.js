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
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
  //DFS+hash+排序:
  // 三元组做法，通过树的节点进行遍历，求得每个节点的坐标，创建一个节点的三元组（row,col,val）
  // 分别为行，列，节点值，
  // 对三元组按照列从小到大，行从小到大，值从小到大排序
  // 排序完成后对同一列的元素进行合并成同一个数组

  let map = new Map()
  const nodeArr = []
  //dfs遍历节点，求坐标
  const getnodeArr = function dfs(root, i, j) {
    if (!root) {
      return
    }
    nodeArr.push([i, j, root.val])
    dfs(root.left, i + 1, j - 1)
    dfs(root.right, i + 1, j + 1)
  };
  getnodeArr(root, 0, 0)

  //排序
  // 对三元组中行、列、值从大到小排序
  nodeArr.sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1]
    }
    if (a[0] !== b[0]) {
      return a[0] - b[0]
    }
    return a[2] - b[2]
  })

  //排序之后进行同列元素排序
  const resArr = [];
  let lastCol = -1010; // -1000 <= col <= 1000
  for (let i = 0; i < nodeArr.length; ++i) {
    let curCol = nodeArr[i][1];
    if (curCol !== lastCol) {
      lastCol = curCol;
      resArr.push([]);
    }
    resArr[resArr.length - 1].push(nodeArr[i][2]);
  }

  return resArr;



};