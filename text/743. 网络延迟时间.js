/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  //Dijkstra算法+邻接矩阵
  // 复杂度：O（n^2）
  //枚举所有汇点的复杂度为O（n），朴素Dijkstra算法的复杂度为O（n^2），整体复杂度为O（n^3）

  const INF = Number.MAX_SAFE_INTEGER;
  const arr = new Array(n).fill(INF).map(() => new Array(n).fill(INF))
  for (const t of times) {
    const x = t[0] - 1,
      y = t[1] - 1
    arr[x][y] = t[2]
  }
//朴素dijkstra算法
// 
  const dist =new Array(n).fill(INF)
  dist[k-1]=0
  const used =new Array(n).fill(false)
   for (let i = 0; i < n; ++i) {
     let x = -1;
     for (let y = 0; y < n; ++y) {
       if (!used[y] && (x === -1 || dist[y] < dist[x])) {
         x = y;
       }
     }
     used[x] = true;
     for (let y = 0; y < n; ++y) {
       dist[y] = Math.min(dist[y], dist[x] + g[x][y]);
     }
   }

   let ans = Math.max(...dist);
   return ans === INF ? -1 : ans;
};