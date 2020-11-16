
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.


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
var addTwoNumbers = function (l1, l2) {
  let r = 0;
  let result = null;
  let currentNode = null;

  while(l1 !== null || l2 !== null) {
      let d = 0;
      if (l1 === null){
          d = l2.val + r;
          l2 = l2.next;
          //move l2 next
      } else if (l2 === null) {
          d = l1.val + r;
          l1 = l1.next
          //move l1 next
      } else {
          d = l1.val + l2.val + r;
          l2 = l2.next;
          l1 = l1.next;
          // move both
      }
              if (d >= 10) {
          d %= 10;
          r = 1;
      } else {
          r = 0;
      }
      if (result === null){
          result = new ListNode(d, null)
          currentNode = result;
      } else {
          currentNode.next = new ListNode(d);
          currentNode = currentNode.next;
      }

  }
  if(r === 1) {
      currentNode.next = new ListNode(1);
  }
  return result;
};



  //for each number in each linked list
  // add the two togther
  // if that number is greater than 10
  //  mod the answer, use the remained as the value
  // add one to the next node over