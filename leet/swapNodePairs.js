// Given a linked list, swap every two adjacent nodes and return its head.

// You may not modify the values in the list's nodes. Only nodes itself may be changed.

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
var swapPairs = function(head) {
  if(head === null) {
      return head;
  }
  if (head.next === null){
      return head;
  }

  let p1 = head;
  let p2 = head.next;
  head = p2;
  let prev = null;

  while(p2 !== null) {

      p1.next = p2.next;
      p2.next = p1
      //update the pointers
      if (prev) {
          prev.next = p2;
      }
      prev = p1;
      p1 = p1.next;
      p2 = p1 === null ? null : p1.next

  }

  return head;

};

// Example 1:
// Input: head = [1,2,3,4]
// Output: [2,1,4,3]

// Example 2:
// Input: head = []
// Output: []

// Example 3:
// Input: head = [1]
// Output: [1]