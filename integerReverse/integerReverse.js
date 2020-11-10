/*
*
* Integer Reverse
*
* Given a positive integer, return its digits reversed.
*
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY.
* - Only use integers and math in your solution.
*
*/

function reverseInteger(number) {
  let reverse = 0;
  let numCopy = number;

    while (numCopy > 0) {
      lastDigit = numCopy % 10;
      reverse = reverse * 10 + lastDigit;
      numCopy = Math.floor(numCopy / 10);
    }

    return reverse;
  }

