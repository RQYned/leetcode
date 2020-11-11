/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  const getsum=(num)=>{
    let sum=0
     while(num){
       sum += num % 10
       num= Math.floor(num / 10)
      
     }
     return sum
  }

  const dic=[
    [-1,0],
    [0,1],
    [1,0],
    [0,-1]
  ]

  let set = new Set(['0,0'])

  // 将遍历的坐标队列，题意要求从[0,0]开始走
  let queue = [[0, 0]];

  // 遍历队列中的坐标
  while (queue.length) {
    // 移除队首坐标
    let [x, y] = queue.shift();

    // 遍历方向
    for (let i = 0; i < 4; i++) {
      let offsetX = x + dic[i][0];
      let offsetY = y + dic[i][1];


      // 临界值判断
      if (offsetX < 0 || offsetX >= m || offsetY < 0 || offsetY >= n || getsum(offsetX) + getsum(offsetY) > k || set.has(`${offsetX},${offsetY}`)) {
        continue;
      }

      // 走过的格子就不再纳入统计
      set.add(`${offsetX},${offsetY}`);

      // 将该坐标加入队列（因为这个坐标的四周没有走过，需要纳入下次的遍历）
      queue.push([offsetX, offsetY]);
    }
  }

  // 走过坐标的个数就是可以到达的格子数
  return set.size;

};
console.log(movingCount(m = 2, n = 3, k = 1))