/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */


 //带权并查集和图


  //邻接表和dfs
  var calcEquation = function (equations, values, queries) {
    let map = new Map(), res = [];
    let visit = new Map();  // visit 数组标记在搜索过程中是否访问过

    const dfs = (src, dst) => {
      // 若可达，且找到了目的节点，返回 1.0 表示成功到达
      if (src === dst) {
        return 1.0;
      }

      let adjs = map.get(src);

      // 遍历 src 的所有边，若未访问过，则对其调用 dfs 获取路径积
      for (let i = 0; i < adjs.length; ++i) {
        let next = adjs[i];
        if (!visit.get(next[0])) {
          visit.set(next[0], true);

          let ret = dfs(next[0], dst);

          visit.set(next[0], false);
          // 若可达 dst，则返回当前边权与后续的边权积 ret 的乘积
          if (ret !== -1.0) {
            return next[1] * ret;
          }
        }
      }

      // 否则，不可达，返回 -1.0
      return -1.0;
    };

    // 创建邻接表
    for (let i = 0; i < equations.length; ++i) {
      let e = equations[i], v = values[i];

      if (!map.has(e[0])) {
        map.set(e[0], []);
        visit.set(e[0], false);
      }
      if (!map.has(e[1])) {
        map.set(e[1], []);
        visit.set(e[1], false);
      }

      let adj1 = map.get(e[0]);
      let adj2 = map.get(e[1]);
      adj1.push([e[1], v]);
      adj2.push([e[0], 1 / v]);
    }

    for (let q of queries) {
      let n0 = q[0], n1 = q[1];
      if (map.has(n0) && map.has(n1)) {
        visit.set(n0, true);
        res.push(dfs(n0, n1));
        visit.set(n0, false);
      } else {
        res.push(-1.0);
      }
    }

    return res; };


console.log(calcEquation(
  [["a", "c"], ["b", "e"], ["c", "d"], ["e", "d"]],
  [2.0, 3.0, 0.5, 5.0],
  [["a", "b"]]
))
