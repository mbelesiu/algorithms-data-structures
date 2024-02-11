// Given two binary trees, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// Depth First Search
// Use Recursion
var isSameTree = function (p, q) {
    if (p === null && q === null) {
        return true;
    }
    if (p === null || q === null) {
        return false;
    }
    if (p.val !== q.val) {
        return false;
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)

};

// Breath First Search
// Uses Queues
var isSameTree = function (p, q) {

    const queue = [p, q];

    while (queue.length > 0) {
        let v1 = queue.shift();
        let v2 = queue.shift();

        if (v1 === null && v2 == null) {
            continue;
        }
        if (v1 === null || v2 == null) {
            return false;
        }

        if (v1.val !== v2.val) {
            return false
        }

        queue.push(v1.left)
        queue.push(v2.left)
        queue.push(v1.right)
        queue.push(v2.right)

    }
    return true
};