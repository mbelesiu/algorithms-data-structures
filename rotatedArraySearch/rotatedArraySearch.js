/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (rotated, target) {
  // Write your code here, and
  // return your final answer.
  let left = 0
  let right = rotated.length - 1;

  if (rotated.length === 1) {
    return rotated[0] === target ? 0 : null;
  }
  while (left <= right) {
    let middle = Math.floor( (right + left) / 2 );

    if (rotated[middle] === target) {
      return middle;
    } else if (rotated[left] <= rotated[middle]) {
      if (rotated[left] <= target && target < rotated[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      if (rotated[middle] < target && target <= rotated[right]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }
  return null;
};

