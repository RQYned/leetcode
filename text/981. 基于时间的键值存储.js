/**
 * Initialize your data structure here.
 */
//哈希表和二分查找
//https://leetcode-cn.com/problems/time-based-key-value-store/solution/ji-yu-shi-jian-de-jian-zhi-cun-chu-by-le-t98o/
var TimeMap = function () {
  this.map = new Map()
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if(this.map.has(key)){
      this.map.get(key).push([value,timestamp])
  }else{
    this.map.set(key,[[value,timestamp]])
  }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
   let pairs = this.map.get(key)
   if(pairs){
     let low=0;
     let high=pairs.length-1;
    //  let mid=Math.floor((low + high)/2) 
     while(low<=high){
          let mid = Math.floor((low + high) / 2)
       if(pairs[mid][1]>timestamp){
         high=mid-1
       } else if (pairs[mid][1] < timestamp) {
          low = mid+1
       }else{
         return pairs[mid][0]
       }
   }
   if(high>=0){
     return pairs[high][0]
   }
   return ""
  }  
  return ""
};
// 复杂度分析：
//   时间复杂度：
//     初始化timemap和set操作都是O(1)
//     get操作根据set的次数，复杂度为O(logn)
//   空间复杂度：
//     O(n),我们需要通过哈希表存储数据
console.log(TimeMap(["TimeMap", "set", "get", "get", "set", "get", "get"], [
    [],
    ["foo", "bar", 1],
    ["foo", 1],
    ["foo", 3],
    ["foo", "bar2", 4],
    ["foo", 4],
    ["foo", 5]
  ]))
/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */