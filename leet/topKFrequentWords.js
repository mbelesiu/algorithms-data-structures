// Given a non-empty list of words, return the k most frequent elements.

// Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

// Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// Output: ["i", "love"]
// Explanation: "i" and "love" are the two most frequent words.
//     Note that "i" comes before "love" due to a lower alphabetical order.

/*
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const result = [];
  const freq = {};

  words.forEach((item) => {
    if (freq[item]) {
      freq[item]++;
    } else {
      freq[item] = 1;
    }
  });
  for (key in freq) {
    //add and sort
    let flag = true;
    for (let i = 0; i < result.length; i++) {
      if (freq[key] > freq[result[i]]) {
        result.splice(i, 0, key);
        flag = false;
        break;
      } else if (freq[key] === freq[result[i]]) {
        let j = i;
        let temp = [key];
        let size = result.length;
        while (j < size) {
          if (freq[key] === freq[result[j]]) {
            temp.push(result[j]);
          }
          j++;
        }
        temp.sort();
        temp.forEach((item, x) => {
          if(x === 0){
            result.splice(i + x, 0, item);
          }
          result.splice(i + x, 1, item);
        });
        flag = false;
        break;
      }
    }
    if (flag) {
      result.push(key);
    }
  }
  return result.slice(0, k);
};