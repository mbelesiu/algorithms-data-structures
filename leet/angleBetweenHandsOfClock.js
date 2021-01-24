// Given two numbers, hour and minutes. Return the smaller angle (in degrees) formed between the hour and the minute hand.

/*
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
  if (hour === 12) {
    hour = 0;
  }
  const minuteAngleFromNoon = (360 / 60) * minutes;
  const hourAngleFromNoon = (360 / 12) * hour + (.5 * minutes);
  const result = Math.abs(hourAngleFromNoon - minuteAngleFromNoon);
  return result > 180 ? (360 - result) : result;

};

// Example 1:

// Input: hour = 12, minutes = 30
// Output: 165

// Example 2:

// Input: hour = 3, minutes = 30
// Output: 75

// Example 3:

// Input: hour = 3, minutes = 15
// Output: 7.5

// Example 4:

// Input: hour = 4, minutes = 50
// Output: 155

// Example 5:

// Input: hour = 12, minutes = 0
// Output: 0


// Constraints:

// 1 <= hour <= 12
// 0 <= minutes <= 59
// Answers within 10^-5 of the actual value will be accepted as correct.