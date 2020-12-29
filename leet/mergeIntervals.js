// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

/*
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  // when seeing if we can merg an interval, check the last element of the current element to the next element on the list
  // you want to see if the last element is bigger than the first AND smaller than the last of that next element
  //if the case is where it is bigger than both, completely delete that next element, and recheck to the next element.

  intervals.sort((a, b) => a[0] - b[0])

  for(let i = 0; i < intervals.length-1; i++){
      if(intervals[i][1] >= intervals[i+1][0] && intervals[i][1] < intervals[i+1][1]){
          // update the current intefrval[i][1]
          // delete the next interval[i+1]
          intervals[i][1] = intervals[i+1][1];
          intervals.splice(i+1,1);
          i--

      } else if(intervals[i][1] >= intervals[i+1][0] && intervals[i][1] >= intervals[i+1][1]){
          // delete the i+1 interval[i+1]
          intervals.splice(i+1,1);
          i--
      }
  }
  return intervals;
};

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.