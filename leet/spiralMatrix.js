// Given an m x n matrix, return all elements of the matrix in spiral order.
// Example 1
//   Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
//   Output: [1,2,3,6,9,8,7,4,5]
// Example 2
//   Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
//   Output: [1,2,3,4,8,12,11,10,9,5,6,7]


var spiralOrder = function (matrix) {
  let result = [];
  let colStart = 0;
  let rowStart = 0;
  let colEnd = matrix[0].length - 1;
  let rowEnd = matrix.length - 1;

  while (true) {
    for (let i = colStart; i <= colEnd; i++) {
      result.push(matrix[rowStart][i]);
    }
    rowStart++;
    if (rowStart > rowEnd) {
      return result;
    }

    for (let j = rowStart; j <= rowEnd; j++) {
      result.push(matrix[j][colEnd]);
    }
    colEnd--;
    if (colEnd < colStart) {
      return result;
    }
    for (let i = colEnd; i >= colStart; i--) {
      result.push(matrix[rowEnd][i]);
    }
    rowEnd--;
    if (rowStart > rowEnd) {
      return result;
    }
    for (let j = rowEnd; j >= rowStart; j--) {
      result.push(matrix[j][colStart]);
    }
    colStart++;
    if (colEnd < colStart) {
      return result;
    }
  }
};

//need a result array
// for loop through length of n (length of subarray) INCREASING
//  add each item to resuylt array
// for loop through length of m (length of array) INCREASING
//  add each item to result array
//  for loop through length of n (length of subarray) DECREASING
//  add each item to result array
// for loop through length of m(length of array) DECREASING
// add each element to sub array