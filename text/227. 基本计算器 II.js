/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const nums = []
  let cur = 0
  let prevOp = '+'
  s = s + '+'

  for (let i = 0; i < s.length; i++) {
    if (s[i] >= '0' && s[i] <= '9') {
      cur = cur * 10 + s[i].charCodeAt(0) - '0'.charCodeAt(0)
    } else if (s[i] == ' ') {
      continue
    } else {
      if (prevOp == '+') {
        nums.push(cur)
      } else if (prevOp == '-') {
        nums.push(-1 * cur)
      } else if (prevOp == '*') {
        nums[nums.length - 1] *= cur
      } else if (prevOp == '/') {
        nums[nums.length - 1] = (nums[nums.length - 1] / cur) | 0
      }
      prevOp = s[i]
      cur = 0
    }
  }
  let sum = 0
  nums.forEach(v => {
    sum += v
  })
  return sum
};
