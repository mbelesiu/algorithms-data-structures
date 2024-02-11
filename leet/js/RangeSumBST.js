// Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

// take a breadth... first 
var rangeSumBST = function(root, low, high) {
    if(!root) {
        return
    }
    const queue = [root]
    let sum = 0

    while(queue.length !== 0) {
        let current = queue.shift()
        if(current.left) queue.push(current.left)
        if(current.right) queue.push(current.right)
        // console.log(current.val)
        if(current.val >= low && current.val <= high){
            sum += current.val
        }
    }
    return sum
};

//dfs option

var rangeSumBST = function(root, low, high) {
    let allSum = 0
    const dfs = (node) => {
        if(!node) return
        dfs(node.left)
        dfs(node.right)
        if(node.val >= low && node.val <= high){
            allSum += node.val
        }
        return
    }

    dfs(root)
    return allSum
};

// Example 1:
// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

// Example 2:
// Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
// Output: 23
// Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.
