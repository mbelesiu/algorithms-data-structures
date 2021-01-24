// Write a program to find the node at which the intersection of two singly linked lists begins.

/*
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null;
  }
  let p1 = headA;
  let p2 = headB;

  while (p1 !== null || p2 !== null) {
    if (p1 === p2) {
      return p1;
    }
    p1 = p1.next;
    p2 = p2.next;
    if (p1 === null && p2 !== null) {
      p1 = headB
    }
    if (p1 !== null && p2 === null) {
      p2 = headA
    }
  }
  return null;

};

// Notes:

// If the two linked lists have no intersection at all, return null.
// The linked lists must retain their original structure after the function returns.
// You may assume there are no cycles anywhere in the entire linked structure.
// Each value on each linked list is in the range [1, 10^9].
// Your code should preferably run in O(n) time and use only O(1) memory.