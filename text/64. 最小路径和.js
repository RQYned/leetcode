/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[0].length; j++) {
      if (i != 0 && j != 0) {
        grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
      } else if (i == 0 && j != 0) {
        grid[i][j] = grid[i][j - 1] + grid[i][j];
      } else if (i != 0 && j == 0) {
        grid[i][j] = grid[i - 1][j] + grid[i][j];
      } else if (i == 0 && j == 0) {
        continue;
      }
    }
  }
  return grid[grid.length - 1][grid[0].length - 1];
};
console.log(minPathSum(grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
]))