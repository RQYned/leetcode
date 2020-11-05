/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
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
var removeElements = function(head, val) {
  let newHead = new ListNode(null),
    prev = newHead,
    curr = head;
  newHead.next = head;

  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next;
      curr = prev.next;
    }
    else {
      prev = curr;
      curr = curr.next;
    }
  }

  return newHead.next;
};
// @lc code=end

