/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  // 拓扑排序+反向图

  //先做反向图，将原图中的出度作为入度，开辟一个新数组做反向图的入度数组
  const n = graph.length;
  const rFigure = new Array(n).fill(0).map(() => new Array())
  const inDeg = new Array(n).fill(0);
  for (let x = 0; x < n; ++x) {
    for (let y of graph[x]) {
      rFigure[y].push(x)
    }
    inDeg[x] = graph[x].length;
  }
  //先将入度为0的点加入队列，然后不断去处队首元素，将其出度减一
  const queue = []
  for (let i = 0; i < n; ++i) {
    if (inDeg[i] === 0) {
      queue.push(i)
    }
  }
  
  while (queue.length) {
    const y = queue.shift();
    for (const x of rFigure[y]) {
      if (--inDeg[x] === 0) {
        queue.push(x)
      }
    }
  }

  const ans = []
  for (let i = 0; i < n; ++i) {
    if (inDeg[i] === 0) {
      ans.push(i)
    }
  }
  return ans
};