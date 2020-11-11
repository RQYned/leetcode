/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
//记忆化和深搜
var findRotateSteps = function (ring, key) {
  const indexMap = {};
  for (let i = 0; i < ring.length; i++) {
    const c = ring[i];
    if (indexMap[c]) {
      indexMap[c].push(i);
    } else {
      indexMap[c] = [i];
    }
  }
  //记忆化
  const next=  new Array(ring.length)
  for(let i=0;i<ring.length;i++){
    next[i] = new Array(key.length).fill(-1)
  }
  
  const dfs = (ringI, keyI) => {
    if (keyI == key.length) {
      return 0;
    }
    if (next[ringI][keyI] != -1) {
      return next[ringI][keyI]
    }
    const cur = key[keyI];
    let res = Infinity;
    for (const targetI of indexMap[cur]) {
      const d1 = Math.abs(ringI - targetI);
      const d2 = ring.length - d1;
      const curMin = Math.min(d1, d2);
      res = Math.min(res, curMin + dfs(targetI, keyI + 1));
    }
    next[ringI][keyI]=res
    return res;
  };

  return key.length + dfs(0, 0);
};
