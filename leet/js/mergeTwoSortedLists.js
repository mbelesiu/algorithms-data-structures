// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

// Example 1:
// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: l1 = [], l2 = []
// Output: []
// Example 3:

// Input: l1 = [], l2 = [0]
// Output: [0]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if(l1 === null && l2 === null){
      return l1;
  }
  if(l1 === null || l2 === null){
      return l2 === null ? l1 : l2;
  }
  let newList = l1.val <= l2.val ? l1 : l2;
  let n = newList;
  let p1 = l1.val <= l2.val ? l1.next : l1;
  let p2 = l1.val <= l2.val ? l2 : l2.next;

  while(p1 !== null && p2 !== null){
      if (p1.val <= p2.val) {
          n.next = p1;
          p1 = p1.next
      } else {
          n.next = p2;
          p2 = p2.next
      }
      n = n.next;
  }

  if(p1 !== null){
      n.next = p1;
  }
  if(p2 !== null){
      n.next = p2;
  }

  return newList;
};