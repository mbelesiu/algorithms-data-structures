/*
 * @param {number[]} nums
 * @return {string[]}
 */
 var summaryRanges = function(nums) {

  if (nums.length < 1) return nums

  const output = []

  let start = nums[0]


  for(let i = 1; i < nums.length; i++){

      if(nums[i] - nums[i-1] !== 1){

          if(nums[i-1] === start){
              output.push(`${start}`)
          } else {
              output.push(`${start}->${nums[i-1]}`)
          }

          start = nums[i]
      }
  }


      if(nums[nums.length-1] === start){
          output.push(`${start}`)
      } else {
          output.push(`${start}->${nums[nums.length-1]}`)
      }


  return output
};


// Example 1:

// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"
// Example 2:

// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"


// Constraints:

// 0 <= nums.length <= 20
// -231 <= nums[i] <= 231 - 1
// All the values of nums are unique.
// nums is sorted in ascending order.