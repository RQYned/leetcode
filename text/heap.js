"use strict";
exports.__esModule = true;
exports.Heap = void 0;
var Heap = /** @class */ (function () {
    function Heap(arr, fn) {
        if (arr === void 0) { arr = []; }
        this.container = [];
        if (fn) {
            this.compare = fn;
        }
        else {
            this.compare = function (v1, v2) {
                //>= 小顶堆
                return v1 >= v2;
            };
        }
        if (Array.isArray(arr)) {
            arr.forEach(this.insert.bind(this));
        }
    }
    Heap.prototype.insert = function (data) {
        var container = this.container;
        container.push(data);
        var index = container.length - 1;
        while (index) {
            var parent_1 = Math.floor((index - 1) / 2);
            if (this.compare(container[index], container[parent_1])) {
                break;
            }
            this.swap(container, index, parent_1);
            index = parent_1;
        }
    };
    Heap.prototype.extract = function () {
        var container = this.container;
        if (!container.length) {
            return null;
        }
        this.swap(container, 0, container.length - 1);
        var res = container.pop();
        var length = container.length;
        var index = 0, exchange = index * 2 + 1;
        while (exchange < length) {
            var right = index * 2 + 2;
            if (right < length && this.compare(container[exchange], container[right])) {
                exchange = right;
            }
            if (this.compare(container[exchange], container[index])) {
                break;
            }
            this.swap(container, exchange, index);
            index = exchange;
            exchange = index * 2 + 1;
        }
        return res;
    };
    Heap.prototype.swap = function (arr, i, j) {
        var _a;
        ;
        _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
    };
    Heap.prototype.isEmpty = function () {
        return this.container.length === 0;
    };
    Heap.prototype.topValue = function () {
        return this.container[0];
    };
    return Heap;
}());
exports.Heap = Heap;
