// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

//  @param {number[]} nums
//  @return {void} Do not return anything, modify nums in-place instead.
 
var sortColors = function(nums) {
    let zero = 0
    let one = 0
    let two = 0
    for(let i =0; i < nums.length; i++){
        if(nums[i] === 0) {
            zero++
        } else if (nums[i] === 1){
            one++
        } else [
            two++
        ]
    }
    for(let i = 0; i < nums.length; i++) {
        if(zero != 0){
            nums[i] = 0
            zero--
        } else if(one != 0) {
            nums[i] = 1
            one --
        } else {
            nums[i] = 2
            two --
        }
    }
};