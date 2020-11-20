// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

/*
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length <= 1) {
    return false;
  }
  const uberStack = [];
  const uberMap = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      uberStack.push(s[i]);
    } else {
      if (uberStack.length === 0) {
        return false;
      }
      let uber = uberStack.pop();
      if (s[i] !== uberMap[uber]) {
        return false;
      }
    }
  }
  if (uberStack.length !== 0) {
    return false;
  }
  return true;
};
