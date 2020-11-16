// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const result = [];
  for (let i = 0; i < nums.length; i++){

          result.push(i);
          for (let j = i+1; j < nums.length; j++) {
              if(nums[i] + nums[j] === target) {
                  result.push(j);
                  return result;
              }
          }
          result.pop()
  }
  return result;
};

//for each item in the num array
// pick an item if it is below size, add it to the result array
// save that index, youll pick up from theere
// start iterating through the rest of the numbers
// if the next index plus the first index === target
// done, return
// if hit the end of the array,
// pop the results, move to next vaible num
// if nothing found at all, done
