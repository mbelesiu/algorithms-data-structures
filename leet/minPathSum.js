// Given a m x n grid filled with non - negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

//   Note: You can only move either down or right at any point in time.

// This one works
/*
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  for (let i = 1; i < grid[0].length; i++) {
    grid[0][i] += grid[0][i - 1];
  }
  for (let i = 1; i < grid.length; i++) {
    grid[i][0] += grid[i - 1][0];
  }
  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[0].length; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }
  return grid[grid.length - 1][grid[0].length - 1];
};

// Brute Force. No Good
/*
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const row = grid.length;
  const col = grid[0].length;
  let minPath = Infinity;


  const pathFinder = (x, y, currentPath) => {
    if (x >= row || y >= col) {
      return;
    }

    currentPath += grid[x][y];
    if (x === row - 1 && y === col - 1) {
      minPath = minPath > currentPath ? currentPath : minPath;
      currentPath -= grid[x][y];
      return;
    }

    pathFinder(x + 1, y, currentPath);
    pathFinder(x, y + 1, currentPath);
    currentPath -= grid[x][y];
    return;
  }

  pathFinder(0, 0, 0);
  return minPath;
};

// Example 1:
// Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

// Example 2:
// Input: grid = [[1,2,3],[4,5,6]]
// Output: 12