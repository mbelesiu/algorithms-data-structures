/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */

var quicksort = function(array) {


  var arrLess = [];
  var arrGrt = [];
  var same = [];

  if (array.length <= 1) {
    return array;
  }

  index = 0;

  for (var i = 0; i < array.length; i ++) {
    if (array[i] > array[index]) {
      arrGrt.push(array[i]);
    } else if (array[i] < array[index]){
      arrLess.push(array[i]);
    } else {
      same.push(array[i]);
    }
  }

  return quicksort(arrLess).concat(same, quicksort(arrGrt));
};

//This code works, but I made some mistakes that road blocked my progress
//What did I learn?
// First - Arrays cannot be compared by just doing === You need to run a
// length test and a comparison on each item (see commented code out below)
// Second - Turn in the code (in the HR enviroment)
// Third - Gotta learn to calm down