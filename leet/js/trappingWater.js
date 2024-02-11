// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

/*
 * @param {number[]} height
 * @return {number}
 */
// Dynamic Programming. Works better
var trap = function (height) {
  let waterCounter = 0;
  let size = height.length;
  let left_max = new Array(size).fill(0);
  let right_max = new Array(size).fill(0);
  left_max[0] = height[0];

  for (let i = 1; i < size; i++) {
    left_max[i] = Math.max(height[i], left_max[i - 1]);
  }
  right_max[size - 1] = height[size - 1];
  for (let i = size - 2; i >= 0; i--) {
    right_max[i] = Math.max(height[i], right_max[i + 1]);
  }
  for (let i = 0; i < size; i++) {
    waterCounter += Math.min(left_max[i], right_max[i]) - height[i];
  }
  return waterCounter;
};

// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

// Brute force. Works with all except largeData
// var trap = function(height) {
//     let isWell = false;
//     let waterCounter = 0
//     let h = 1;
//     while(true){
//         let tempCount = 0
//         let foundHeight = false;
//         for( let i = 0; i < height.length; i++ ){

//             if(isWell) {
//                 if(height[i] < h){
//                     tempCount++;
//                 } else {
//                     waterCounter += tempCount
//                     isWell = false;
//                     tempCount = 0;
//                 }

//             }

//             if(height[i] >= h){
//                 foundHeight = true;
//                 isWell = !isWell;
//                 continue;
//             }


//         }
//         if(foundHeight){
//             h++;
//             isWell = false
//         } else {
//             break;
//         }
//     }
//     return waterCounter
// };

