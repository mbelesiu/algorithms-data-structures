// Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {ListNode} head
 * @return {TreeNode}
 */


const findMiddle = (head) => {
  let slow = head;
  let fast = head;
  let prev = null;

  while (fast !== null && fast.next !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  if (prev != null) {
    prev.next = null;
  }

  return slow;
}

var sortedListToBST = function (head) {
  if (!head) {
    return head;
  }

  const mid = findMiddle(head);
  const bst = new TreeNode(mid.val);

  if (head === mid) {
    return bst;
  }

  bst.left = sortedListToBST(head);
  bst.right = sortedListToBST(mid.next);

  return bst;

};

// Example 1:

// Input: head = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.


// Example 2:

// Input: head = []
// Output: []


// Example 3:

// Input: head = [0]
// Output: [0]


// Example 4:

// Input: head = [1,3]
// Output: [3,1]