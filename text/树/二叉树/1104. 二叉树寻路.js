/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function (label) {
  //数学方法，先计算目标值和当前层数的最大值的差值，然后通过这个差值找上层最小值偏移这个差值>>1二进制右移的位置
  // 因为该二叉树每层叶子结点都不为空，所以可以利用2的次方确定上层目标值的位置

  let res = []
  let dep = 1,
    tmp = 0;
  while (tmp < label) {
    tmp = (2 ** dep) - 1
    res.push(tmp)
    dep++;
  }
  for (let i = dep - 2; i > 0;) {
    const d = (res[i] - label) >> 1
    res[i--] = label;
    label=(2 ** i) + d
  }
  return res
};