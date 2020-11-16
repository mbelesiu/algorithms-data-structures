/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */


var powerSet = function(str) {
  var results = [''];

  var arr = [...str]
  for (var i = 0; i < arr.length; i++) {
    var len = results.length;
    for (var j = 0; j <len; j++) {
      var x = results[j] + arr[i];
      x.split().sort().join('');
        results.push(x);


    }
  }
  results = [... new Set(results)]

  return results;


};