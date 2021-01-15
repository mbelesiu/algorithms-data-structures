// Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

// Note: A leaf is a node with no children.

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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  let results = [];
  if (!root) {
    return results;
  }

  let pathSum = 0;
  const currentPath = [];

  const dfs = (node) => {
    currentPath.push(node.val);
    pathSum += node.val;
    if (node.left === null && node.right === null) {
      if (pathSum === sum) {
        results.push([...currentPath]);
      }
      pathSum -= node.val;
      currentPath.pop();
      return;
    }

    if (node.left) {
      dfs(node.left)
    }
    if (node.right) {
      dfs(node.right)
    }
    pathSum -= node.val;
    currentPath.pop();
    return;

  }

  dfs(root);
  return results;

};

Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \    / \
// 7    2  5   1
// Return:

// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]