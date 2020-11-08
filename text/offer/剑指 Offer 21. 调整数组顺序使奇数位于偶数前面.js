/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let nums1=[],
  nums2=[]
  nums.forEach(element => {
    element%2 ? nums1.push(element) : nums2.push(element)
  });
  return nums1.concat(nums2)
};