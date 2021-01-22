// Given a triangle array, return the minimum path sum from top to bottom.

// For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

/*
 * @param {number[][]} triangle
 * @return {number}
 */

var minimumTotal = function(triangle) {
  const len = triangle.length;
  if(!triangle || ! len){
      return 0;
  }
  const minArr = triangle[len - 1];
  for(let i = len -2; i >= 0; i--){
      for(let j = 0; j <= i; j++ ){
          minArr[j] = Math.min(minArr[j], minArr[j + 1]) + triangle[i][j];
      }
  }
  return minArr[0];
};

Example 1:

// Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// Output: 11
// Explanation: The triangle looks like:
//    2
//   3 4
//  6 5 7
// 4 1 8 3
// The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
// Example 2:

// Input: triangle = [[-10]]
// Output: -10