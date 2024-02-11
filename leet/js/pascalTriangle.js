// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

/*
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let result = [];
  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      result.push([1]);
    } else if (i === 1) {
      result.push([1, 1]);
    } else {
      let currentRow = [1];
      for (let j = 1; j < i; j++) {
        currentRow.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
      currentRow.push(1);
      result.push(currentRow);
    }
  }

  return result;
};

console.log(generate(5));
// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]