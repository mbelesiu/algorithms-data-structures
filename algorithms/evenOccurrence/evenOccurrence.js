/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {

  visted = [];

  for (var i = 0; i < arr.length; i++) {
    if (visted.length === 0) {
      visted.push([arr[i], 0]);
    };
    var seen = false;
    for ( var j = 0; j < visted.length; j++){
      if (visted[j][0] === arr[i]) {
        visted[j][1]++;
        seen = true;
        break;
      }
    }
    if (!seen) {
      visted.push([arr[i], 1]);
      seen = false;
    }
  }

  for (var i = 0; i < visted.length; i++) {
    if (visted[i][1] % 2 === 0) {
      return visted [i][0];
    }
  }

  return null;
};

