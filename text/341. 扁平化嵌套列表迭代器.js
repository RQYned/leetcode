var NestedIterator = function (nestedList) {
  this.stack = [];
  for (let i = nestedList.length - 1; i >= 0; i--) {
    this.stack.push(nestedList[i]);
  }
};

NestedIterator.prototype.stackTop2Integer = function () {
  while (this.stack.length > 0) {
    const top = this.stack[this.stack.length - 1];
    if (top.isInteger()) {
      return;
    }
    this.stack.pop();
    const list = top.getList();
    for (let i = list.length - 1; i >= 0; i--) {
      this.stack.push(list[i]);
    }
  }
};

NestedIterator.prototype.next = function () {
  this.stackTop2Integer();
  const top = this.stack.pop();

  return top.getInteger();
};

NestedIterator.prototype.hasNext = function () {
  this.stackTop2Integer();
  return this.stack.length > 0;
};