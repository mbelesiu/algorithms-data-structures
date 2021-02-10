// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  const sentinel = new ListNode(-1, head)

  let p = sentinel;

  while(head) {
      if( head.next && head.val === head.next.val) {
          while(head.next && head.val === head.next.val) {
              head = head.next;
          }
          p.next = head.next;
      } else {
          p = p.next;
      }
      head = head.next;
  }

  return sentinel.next;
};


// Example 1:


// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]
// Example 2:


// Input: head = [1,1,1,2,3]
// Output: [2,3]


// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.