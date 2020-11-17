// Implement atoi which converts a string to an integer.

// The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

// The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

// If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

// If no valid conversion could be performed, a zero value is returned.

// Note:

// Only the space character ' ' is considered a whitespace character.
// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, 231 − 1 or −231 is returned.

var myAtoi = function(s) {
  let atoi = 0
  let i = 0;
  let multiplier = 1;
  let neg = false;
  const cypher = {
      '1': 1,
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      '6': 6,
      '7': 7,
      '8': 8,
      '9': 9,
      '0': 0
  }
  while (s[i] === ' '){
      i++;
  }
  if(s[i] === '-'){
      neg = true;
      i++
  } else if (s[i] === '+'){
      i++;
  }
  while(cypher[s[i]] || cypher[s[i]] === 0){
      atoi *= multiplier;
      atoi += cypher[s[i]];
      i++;
      if(multiplier === 1){
          multiplier = 10
      }

  }
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = Math.pow(2, 31);
  if(atoi >= INT_MIN && neg){
      return -Math.pow(2,31)
  }
  if(atoi >= INT_MAX && !neg) {
      return (Math.pow(2,31)-1);
  }
  return neg ? -atoi : atoi

};