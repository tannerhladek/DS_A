/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid, m = obstacleGrid.length, n = obstacleGrid[0].length, memo = {}) {
   if (obstacleGrid[0][0] === 1) return 0

   const str = m.toString() + ',' + n.toString()

   if (str in memo) return memo[str]
   if (m < 1 || n < 1) return 0
   if (obstacleGrid[m - 1][n - 1] === 1) return 0
   if (m === 1 && n === 1) return 1

   memo[str] = uniquePathsWithObstacles(obstacleGrid, m - 1, n, memo) + uniquePathsWithObstacles(obstacleGrid, m, n - 1, memo)

   return memo[str]
};
