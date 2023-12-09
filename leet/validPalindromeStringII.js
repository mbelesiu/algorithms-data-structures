// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

/*
 * @param {string} s
 * @return {boolean}
 */


// attempt one, too slow for large inputs, but works otherwise
var validPalindrome = function (s) {

    for (let skipIndex = 0; skipIndex < s.length; skipIndex++) {

        let i = 0;
        let j = s.length - 1
        while (i < j) {
            if (i === skipIndex) {
                i++
            }
            if (j === skipIndex) {
                j--
            }
            if (s[i] !== s[j]) {
                break
            }
            i++
            j--
        }
        if (i > j || s[i] === s[j]) {
            return true
        }
    }
    return false
};

// attempt two, with the help of studying
// this works because once you have found a non-palindrome, you can try and delete one right then.
// if you cannot make a palindrome after one deletion from one side or the other after you found 
// an invalid palindrome, then it will never be a palindrome, no matter how hard you try 
// Flap your wing penguin, you'll never reach the sky 🐧
var validPalindrome2 = function (s) {

    let low = 0, high = s.length - 1
    while (low < high) {
        if (s[low] !== s[high]) {
            return isPalindrome(s, low + 1, high) || isPalindrome(s, low, high - 1)
        }
        low++
        high--
    }
    return true

};

const isPalindrome = (str, low, high) => {
    while (low < high) {
        if (str[low] !== str[high]) return false
        low++
        high--
    }
    return true
}


// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false