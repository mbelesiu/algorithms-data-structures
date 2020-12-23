// Given a singly linked list, determine if it is a palindrome.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // iterate through the string
  // push a copy of each item into the a 'reverse' stack
  // iterate through a second time

  let og = head;
  let rev = []

  while (og !== null) {
      rev.push(og.val);
      og = og.next;
  }
  og = head
  while(og !== null) {
      if(og.val !== rev.pop()){
          return false;
      }
      og = og.next;
  }

  return true;
};

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true