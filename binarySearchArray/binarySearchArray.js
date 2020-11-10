/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
  if (array.length === 1) {
    array[0] === target ? 0 : null;
  }

  let half = Math.floor(array.length / 2);

  if (target === array[half]) {
    return half;
  }

  if (target < array[half]) {
    return binarySearch(array.slice(0, half), target);

  } else if (target > array[half]) {

    var nxt = binarySearch(array.slice(half + 1), target);

    if (nxt === null) {
      return null;
    } else {
      return half + nxt +1;
    }
  } else {
  return null;
  }
};
