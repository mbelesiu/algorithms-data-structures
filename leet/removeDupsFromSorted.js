// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let p = head;
  while (p !== null) {
    if (p.next && p.val === p.next.val) {
      //NOTE, line 19 & 21 are commented out for perfromces for leetcode, but it is best pratice to clean up and make sure those nodes are not still pointing at the orginial Linked List
      // let temp = p.next
      p.next = p.next.next
      // temp.next = null
    } else {
      p = p.next
    }

  }
  return head;
};

// Example 1:


// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:


// Input: head = [1,1,2,3,3]
// Output: [1,2,3]


// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.