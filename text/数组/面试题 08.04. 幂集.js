/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  // var res=[]
  // //concat 用于合并两个数组或多个数组，且不改变原数组
  // res.push([])
  // for(let i=0;i<nums.length;i++){
  //   for(let j=0;j<res.length;j++){
  //     res.push(res[j].concat(nums[i]))
  //   }
  // }
  // return res
  let result = [[]];
  nums.forEach(d =>
    result.forEach(r =>
      result.push(r.concat(d))
    )
  )
  return result;
};

console.log(subsets(nums=[1,2,3]))