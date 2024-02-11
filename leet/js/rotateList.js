// Given the head of a linked list, rotate the list to the right by k places.

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if(head === null || head.next === null || k === 0) {
      return head;
  }

  let p = head;
  let count = 1;

  while(p.next !== null){
      p = p.next;
      count ++;
  }

  p.next = head;
  k = k % count; // finding the mode i.e. 12 % 5 = 2
  k = count - k; // k = 5 - 2 = 3

  while(k--){
      p = p.next;
  }

  head = p.next;
  p.next = null;


  return head;


};

// Examples
// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

// Input: head = [0,1,2], k = 4
// Output: [2,0,1]