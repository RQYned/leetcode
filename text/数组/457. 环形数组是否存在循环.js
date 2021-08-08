/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function (nums) {

  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      continue;
    }
    //快慢指针
    let slow = i,
      fast = next(nums, i);
      console.log(fast)
    // 判断非零且方向相同，即符号相同且不为零
    while (nums[slow] * nums[fast] > 0 && nums[slow] * nums[next(nums, fast)] > 0) {
      if (slow === fast) {
        if (slow !== next(nums, slow)) {
          return true;
        } else {
          break;
        }
      }
      slow = next(nums, slow);
      fast = next(nums, next(nums, fast));
    }

    let add = i;
    while (nums[add] * nums[next(nums, add)] > 0) {
      const tmp = add;
      add = next(nums, add);
      nums[tmp] = 0;
    }
  }
  return false;
}

const next = (nums, cur) => {
  const n = nums.length;
  return ((cur + nums[cur]) % n + n) % n; // 保证返回值在 [0,n) 中
};
console.log(circularArrayLoop(nums = [2, -1, 1, 2, 2]))