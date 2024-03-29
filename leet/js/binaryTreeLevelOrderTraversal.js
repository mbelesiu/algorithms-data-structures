// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root){
      return [];
  }
  const queue = [root];
  const result = [];
  let p = 0;c
  let nodesThisLevel = 1;
  let nodesNextLevel = 0;
  let nodesSeen = 0;
  let levelArr = [];
  while(p < queue.length){
      if(nodesSeen === nodesThisLevel){
          nodesThisLevel = nodesNextLevel;
          nodesNextLevel = 0;
          nodesSeen = 0;
          result.push([...levelArr]);
          levelArr = [];
      }
      if(queue[p].left !== null ){
          queue.push(queue[p].left);
          nodesNextLevel++;
      }
      if(queue[p].right !== null ){
          queue.push(queue[p].right);
          nodesNextLevel++;
      }
      // console.log(queue[p].val);
      levelArr.push(queue[p].val);
      nodesSeen++;
      p++;
  }
  result.push([...levelArr]);

  return result

};