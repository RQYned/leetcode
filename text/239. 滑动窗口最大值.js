/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  //超时，优化
  //   if (k <= 1) return nums;
  //   const res = [];
  //   for (let i = 0; i < nums.length - k + 1; ++i) {
  //     res.push(Math.max(...nums.slice(i, i + k)));
  //   }
  //   return res; 

  //双端队列
   //存放滑动窗口的下标
  const dequeue = []

  const res = []
  for(let i=0;i<nums.length;i++){
    if(i - dequeue[0] >= k){
      dequeue.shift()
    }
    while(nums[dequeue[dequeue.length-1]] <= nums[i]){
      dequeue.pop()
    }
    dequeue.push(i);
    if (i >=k-1) {
      res.push(nums[dequeue[0]])
    }
  }
 
  return res
};


console.log(maxSlidingWindow(nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3))