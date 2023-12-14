// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any non-empty path.

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
 * @return {number}
 */
var maxPathSum = function (root) {
    let maxPath = -Infinity

    const findSum = (node) => {
        if (!node) return 0

        const left = findSum(node.left)
        const right = findSum(node.right)
        const allSum = left + right + node.val
        const leftNodeSum = left + node.val
        const rightNodeSum = right + node.val

        // Max is all possible combinations
        maxPath = Math.max(maxPath, node.val, allSum, leftNodeSum, rightNodeSum)

        return Math.max(leftNodeSum, rightNodeSum, node.val)

    }

    findSum(root)
    return maxPath
};