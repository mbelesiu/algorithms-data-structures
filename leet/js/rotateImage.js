// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

/*
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (M) {
    let n = M.length, depth = Math.floor(n / 2)
    for (let i = 0; i < depth; i++) {
        let len = n - 2 * i - 1, opp = n - 1 - i
        for (let j = 0; j < len; j++) {
            let temp = M[i][i+j]
            M[i][i+j] = M[opp-j][i]
            M[opp-j][i] = M[opp][opp-j]
            M[opp][opp-j] = M[i+j][opp]
            M[i+j][opp] = temp
        }
    }
};



// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// Example 2:
// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]