/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  if (stones.length < 1) return 0;
  if (stones.length === 1) return stones[0];
  while (stones.length > 1) {
    stones = stones.sort((a, b) => a - b);  // 每次都排序
    let len = stones.length;
    let x = stones[len - 2];
    let y = stones[len - 1];
    if (x === y) {                  // 消灭掉最大的两个石头
      stones = stones.slice(0, len - 2);
    } else {
      y = y - x;
      stones = stones.slice(0, len - 2);
      stones.push(y);
    }
  }
  return stones.length === 1 ? stones[0] : 0;  
};