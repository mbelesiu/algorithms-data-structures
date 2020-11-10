/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function (string1, string2) {
  // TODO: Your code here!
  // create a set from the first string, there by removing any dulplicates
  // navigate thrugh the set, and compare each of the indexs in it to the second, one at a time
  // if a match is found, add that character to the results
  //return the result
  let common = '';
  const unqString = new Set();
  string1 = string1.split('');
  string1.forEach((letter) => unqString.add(letter));
  unqString.forEach((letter) => {
    if (string2.includes(letter)) {
      common += letter;
    }
  })
  return common;
};
