// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

/*
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const row = matrix.length;
  const col = matrix[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] > target) {
        return false;
      } else if (matrix[i][j] === target) {
        return true;
      }
    }
  }
  return false;
};

//or

var searchMatrix = function (matrix, target) {
  const row = matrix.length;
  const col = matrix[0].length;

  for (let i = 0; i < row; i++) {
    if (matrix[i][col - 1] >= target) {
      for (let j = 0; j < col; j++) {
        if (matrix[i][j] > target) {
          return false;
        } else if (matrix[i][j] === target) {
          return true;
        }
      }
    }

  }
  return false;
};

// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Example 2:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100