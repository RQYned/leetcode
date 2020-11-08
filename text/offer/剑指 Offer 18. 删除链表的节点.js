/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const { TreeNode, ListNode, runScript } = require('leetcode-class')
var deleteNode = function (head, val) {
  let newhead=  new ListNode(null)
  let curr=head
  let prev=newhead
  newhead.next=head
  while(curr){
    if(curr.val===val){
      prev.next=curr.next
      curr=curr.next
    }else{
      prev=curr
      curr=curr.next
    }
  }
  return newhead.next
}
console.log(deleteNode(ListNode.create([4,5,1,6]),val=5))
