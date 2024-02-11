// Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

/*
 * @param {character[][]} grid
 * @return {number}
 */

const numIslands = function (grid) {
  let count = 0;

  const markIslandSeen = (x, y) => {
    if (x >= grid.length || x < 0 || y >= grid[0].length || y < 0) {
      //out of bounds
      return;
    }
    if (grid[x][y] !== '1') {
      //not an island
      return;
    }
    //mark given coordninates with a new value of found
    grid[x][y] = '2';

    //check surrounding pieces of land recursively
    markIslandSeen(x + 1, y);
    markIslandSeen(x - 1, y);
    markIslandSeen(x, y + 1);
    markIslandSeen(x, y - 1);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        //island is seen
        markIslandSeen(i, j);
        count++;
      }
    }
  }
  return count;
};



// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3


// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.