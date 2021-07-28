/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
//双指针
let left=0,
    right=height.length-1
let res =0
while(left<=right){
  res = Math.max(res,(right-left)*Math.min(height[left],height[right]))
  if(height[left]>=height[right]){
    --right
  }else{
    ++left
  }
}
return res
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))