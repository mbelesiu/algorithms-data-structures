# Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

# An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        count = 0
        m = len(grid)
        n = len(grid[0])

        def markIslandSeen(x, y):
            if x >= m or x < 0 or y >= n or y < 0:
                return

            if grid[x][y] != '1':
                return

            grid[x][y] = '2'

            markIslandSeen(x + 1, y)
            markIslandSeen(x - 1, y)
            markIslandSeen(x, y + 1)
            markIslandSeen(x, y - 1)



        for i in range(m):
            for j in range(n):
                if grid[i][j] == '1':
                    markIslandSeen(i, j)
                    count += 1

        return count


# Example 1:

# Input: grid = [
#   ["1","1","1","1","0"],
#   ["1","1","0","1","0"],
#   ["1","1","0","0","0"],
#   ["0","0","0","0","0"]
# ]
# Output: 1
# Example 2:

# Input: grid = [
#   ["1","1","0","0","0"],
#   ["1","1","0","0","0"],
#   ["0","0","1","0","0"],
#   ["0","0","0","1","1"]
# ]
# Output: 3


# Constraints:

# m == grid.length
# n == grid[i].length
# 1 <= m, n <= 300
# grid[i][j] is '0' or '1'.
