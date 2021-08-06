/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  //可用二分查找，或者计数查找，亦或者直接排序
  //下为排序求出最大的h值
citations.sort((a,b)=> a-b)
let h=0,
  i=citations.length-1
  while(i>=0&&citations[i]>h){
    h++;
    i--;
  }
  return h
};
console.log(hIndex([0,1,5,6,3]))