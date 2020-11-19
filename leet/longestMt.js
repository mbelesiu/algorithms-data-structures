// You may recall that an array arr is a mountain array if and only if:

// arr.length >= 3
// There exists some index i (0-indexed) with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
// Given an integer array arr, return the length of the longest subarray, which is a mountain. Return 0 if there is no mountain subarray.


/*
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function (arr) {
  let asc = false;
  let des = false;
  let largestMt = 0;
  let beginMt = 0;

  if (arr.length < 3) {
    return largestMt;
  }

  for (let i = 1; i < arr.length; i++) {

    if (!asc && !des) {
      if (arr[i] > arr[i - 1]) {
        beginMt = i-1;
        asc = true;
        continue;
      }
    }
    if (asc && !des) {
      if (arr[i] < arr[i - 1]) {
        asc = false;
        des = true;
        continue;
      }
    }
    if (!asc && des) {
      if (arr[i] >= arr[i - 1]) {
        des = false;
        asc = true;
        largestMt = Math.max(largestMt, i - beginMt);
        beginMt = i-1;
      }
    }
    if(arr[i] === arr[i-1]){
        beginMt = i;
        asc = false;
        des = false;
        continue;
    }
  }
  if (!asc && des) {
    largestMt = Math.max(largestMt, (arr.length - beginMt));
  }
  return largestMt;
};





////ascen = false
// decs = false
//largestMt = 0;
// bMt -> array[0]

//iterate through the array starting at 1
//    if both ascen & decs are negative
//         check to see if current item is largest than last
//              if yes, set bMt to current index
//               else, contiune on
//     if ascen & decs is false
//         check to see if current item is less than last
//          if yes, set ascen to talse, set decs to true
//          else, continue on
//      if(ascen is false and desc is true
//           check to see if current item is greater than last
//           set desc to false
//           see if current index - bMt is bigger than largestMt.
//            else, contiune on
//
//
// after the loop
//    if(ascen is false and desc is true)
//           see if current (array.length -1) - bMt bigger than largetMt