/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, relation, k) {
  //BFS,DFS
  //dp，注意边界问题

  //DFS 看题解
  // let ways = 0
  // const edges = new Array(n).fill(0).map(() => new Array())
  // for (const [index, nextindex] of relation) {
  //   edges[index].push(nextindex)
  // }//二维数组存值
  // const dfs = (index, steps) => {
  //   if (steps == k) {
  //     if (index == n - 1) {
  //       ways++
  //     }
  //     return;
  //   }
  //   const list = edges[index];
  //   for (const nextIndex of list) {
  //     dfs(nextIndex, steps + 1);
  //   }//递归遍历
  // }
  // dfs(0, 0);
  // return ways;

  //dp 做法 题解做法
  //边界问题是i=0时j是否为0

  const dp = new Array(k + 1).fill(0).map(() => new Array(n).fill(0))
  dp[0][0] = 1
  for (let i = 0; i < k; i++) {
    for (const [index, nextindex] of relation) {
      dp[i + 1][nextindex] += dp[i][index]
    }
  }
  return dp[k][n - 1]
};
console.log(numWays(n = 5, relation = [
  [0, 2],
  [2, 1],
  [3, 4],
  [2, 3],
  [1, 4],
  [2, 0],
  [0, 4]
], k = 3))