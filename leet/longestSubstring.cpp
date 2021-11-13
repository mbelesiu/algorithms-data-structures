// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
/*
 * @param {string} s
 * @return {number}
 */

#include <map>
#include <cstring>
using namespace std;

//solution after copying from JS. Slow as shit (compared to other c++ wizards). 1096 ms 😢

class Solution
{
public:
  int lengthOfLongestSubstring(string s)
  {
    int largestSubstring = 0;
    int count = 0;
    int index = 0;
    map<int, int> tracker;

    for (int i = 0; i < s.size(); i++)
    {
      if (tracker[s[i]])
      {
        largestSubstring = largestSubstring >= count ? largestSubstring : count;
        count = 0;
        tracker.clear();
        index++;
        i = index;
      }
      tracker[s[i]] = true;
      count++;
    }
    largestSubstring = largestSubstring >= count ? largestSubstring : count;
    return largestSubstring;
  }
};

// A faster, more bad ass way of dealing with this probelm. Less than 4 ms and used only 6.9 MB of memory 😎

class Solution
{
public:
  int lengthOfLongestSubstring(string s)
  {
    //Don't waste your time, get a move on
    int len = s.length();
    if (len < 2)
      return len;

    int maxLen = 1;
    int currentLen = 1;
    // There are only 128 ASCII characters, so try to minimize the amount of space used
    int visited[128];
    //gotta tell your memory where to allocate this new small visited array.
    // Why is this important? Because if you don't do this, when you iterate through your array,
    // you'll run into maybe 0, maybe 134321, maybe 42
    //Doing this will make sure all of the numbers in this array (up to the size of this array)
    // will be -1, or what ever represts that number
    // Im not a wizards, I am learning..
    // 42 42 42 42 42
    memset(visited, -1, sizeof(visited));
    visited[s[0]] = 0;

    int pre = -1;
    // the rest is standard. Enjoy yourself
    for (int i = 1; i < len; ++i)
    {
      pre = visited[s[i]];
      if (pre == -1 || i - currentLen > pre)
      {
        ++currentLen;
      }
      else
      {
        maxLen = maxLen < currentLen ? currentLen : maxLen;
        currentLen = i - pre;
      }

      visited[s[i]] = i;
    }
    return maxLen < currentLen ? currentLen : maxLen;
  }
};

// for each item in string
// add them to an object
// if that letter matches the object key
//  stop there, thats a subset
//  see if that length is the longest, if yes, keep it, else, move on