// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// Notice that you may not slant the container.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

/*
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let front = 0;
  let back = height.length-1;
  let maxArea = (back - front) * Math.min(height[front], height[back]);

  while(front < back){
      maxArea = Math.max(maxArea, (back - front) * Math.min(height[front], height[back]));
      height[front] >= height[back] ? back-- : front ++;
  }
  return maxArea
};

// have a pointer at the start and end
// take the area, save it as the max
// which ever of the two's values is less, increment/decrement
// see if that area is the largest, if yes, save
// prcoeed with ince/dec
// for ties, incre