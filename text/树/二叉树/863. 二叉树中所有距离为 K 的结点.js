/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
  //建图+dfs
  let map = new Map()
  let res = []

  //记录父结点
   var findParents = (node)=>{
     if(node.left!==null){
       map.set(node.left.val,node)
       findParents(node.left)
     }
     if(node.right!==null){
       map.set(node.right.val,node)
       findParents(node.right)
     }
   }

   findParents(root)

   //dfs

   const dfs =(node,from,depth,k)=>{
     if (node == null) {
       return;
     }
     if (depth === k) {
       res.push(node.val);
       return;
     }
     if (node.left !== from) {
       dfs(node.left, node, depth + 1, k);
     }
     if (node.right !== from) {
       dfs(node.right, node, depth + 1, k);
     }
     if (map.get(node.val) !== from) {
       dfs(map.get(node.val), node, depth + 1, k);
     }
     }
     // 从 target 出发 DFS，寻找所有深度为 k 的结点
     dfs(target, null, 0, k);

     return res;

   }
;