/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  //树状数组，计算前缀和或者区间和，时间复杂度为O(logn) 空间复杂度为O(n)
  //「树状数组」是一种可以动态维护序列前缀和的数据结构，它的功能是：
  // 单点更新 update(i, v) ： 把序列 ii 位置的数加上一个值 vv，在该题中 v = 1v = 1
  // 区间查询 query(i) ： 查询序列[1 \cdots i][1⋯i] 区间的区间和，即 ii 位置的前缀和
  // 其中 n 为需要维护前缀和的序列的长度
  

}