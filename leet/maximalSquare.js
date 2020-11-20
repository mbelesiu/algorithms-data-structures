// Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// Example:

// Input:

// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0

// Output: 4


/*
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  if (matrix.length === 0) {
    return 0;
  }
  let largestSquare = 0;
  let row = matrix.length;
  let col = row > 0 ? matrix[0].length : 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === '1') {
        let squareLength = 1;
        let flag = true;
        while (squareLength + i < row && squareLength + j < col && flag) {
          for (let k = j; k <= squareLength + j; k++) {
            if (matrix[i + squareLength][k] === '0') {
              flag = false;
              break;
            }
          }
          for (let k = i; k <= squareLength + i; k++) {
            if (matrix[k][j + squareLength] === '0') {
              flag = false;
              break;
            }
          }
          if (flag) {
            squareLength++;
          }
        }
        largestSquare = Math.max(squareLength, largestSquare);
      }
    }
  }
  return largestSquare * largestSquare;
};

//TEST CASES
// const test = [
//   ['1', '0', '1', '0', '0'],
//   ['1', '0', '1', '1', '1'],
//   ['1', '1', '1', '1', '1'],
//   ['1', '0', '0', '1', '0'],
// ];
// const test2 = [['1']];
// const test3 = [
//   ['1', '1'],
//   ['1', '1'],
// ];
// const test4 = [
//   ['1', '0'],
//   ['1', '0'],
// ];

// maximalSquare(test);