"use strict";
/*
 * @lc app=leetcode.cn id=973 lang=typescript
 *
 * [973] 最接近原点的 K 个点
 */
exports.__esModule = true;
var heap_1 = require("./heap");
//自己--优先队列-模版
// @lc code=start
function kClosest(points, K) {
    var minHeap = new heap_1.Heap([], function (a, b) { return a[0] >= b[0]; });
    var Len = points.length;
    //[val,index]
    for (var i = 0; i < Len; i++) {
        var _a = points[i], x = _a[0], y = _a[1];
        var X = Math.pow(x, 2);
        var Y = Math.pow(y, 2);
        var target = Math.sqrt(X + Y);
        minHeap.insert([target, i]);
    }
    var res = [];
    while (--K >= 0) {
        var _b = minHeap.extract(), target = _b[0], index = _b[1];
        res.push(points[index]);
    }
    return res;
}
;
// @lc code=end
kClosest([[1, 3], [-2, 2]], 1);
console.log(kClosest);
