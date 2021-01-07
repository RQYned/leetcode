/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const ListNode = require("lc-tool/src/ListNode");

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {

  //两个链表，一个存>x的节点，一个存<x的节点
  //large,small
  let small = new ListNode(0)
  const smallHead = small
  let large = new ListNode(0)
  const largeHead = large

  while(head !==null){
    if(head.val<x){
      small.next = head
      small = small.next
    }else{
      large.next = head
      large = large.next
    }
    head = head.next
  }
  //large 链表结束
  large.next = null 
  //拼接链表
  small.next = largeHead.next;

  return smallHead.next;

};
console.log(partition(ListNode.create([1 ,4 ,3,2 , 5 ,2]),3))