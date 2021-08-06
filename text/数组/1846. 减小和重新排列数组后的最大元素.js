/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function (arr) {
  arr.sort((a, b) => a - b)[0] = 1
  for (let i = 1; i < arr.length; i++) {
    arr[i] = Math.min(arr[i], arr[i - 1] + 1)
  }
  return arr[arr.length - 1]
};