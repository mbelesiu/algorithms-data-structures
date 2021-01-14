// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.
/*
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if(!root){
      return root;
  }
  const queue = [root];
  let p = 0;
  let level = 1;
  while(p < queue.length){
      if(queue[p].left){
          queue.push(queue[p].left)
      }
      if(queue[p].right){
          queue.push(queue[p].right)
      }
      p++
  }
  for(let i = 0; i < queue.length; i++){
      if((i+1) === Math.pow(2,level)-1){
          level++;
          continue;
      }
      queue[i].next = queue[i+1];
  }

  return root;
};
// Example 1:
// Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]
// Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.