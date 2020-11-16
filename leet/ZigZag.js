// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);


/*
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let result = '';
  const processor = [];
  let flag = false;
  let currentRow = 0;

  if(numRows === 1){
    return s;
  }

  for (let i = 0; i < numRows; i++) {
    processor[i] = [];
  }


  for (let i = 0; i < s.length; i++) {
    if (currentRow === 0 || currentRow === numRows - 1) {
      processor[currentRow].push(s[i]);
      flag = !flag;
    } else {
      processor[currentRow].push(s[i]);
    }
    if (flag) {
      currentRow++;
    } else if(!flag){
      currentRow--;
    }
  }

  processor.forEach((row) => {
    row = row.join('');
    result += row;
  });

  return result;
};
// initalize an array, processor with numRows of [].
//for each cahracter in the string
//push it into the processor array
// mod this so it keeps looping through the processor array
// when done, join all three arrays back into strings
//combine strings, return