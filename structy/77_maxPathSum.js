const maxPathSum = (grid, r = 0, c = 0, memo = {}) => {
   // todo
   const pos = r + ',' + c

   if (pos in memo) return memo[pos]
   if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) return -Infinity
   if (r === grid.length - 1 && c === grid[0].length - 1) return grid[r][c]

   let down = maxPathSum(grid, r + 1, c, memo)
   let right = maxPathSum(grid, r, c + 1, memo)
   let sum = grid[r][c] + Math.max(down, right)

   memo[pos] = sum
   return memo[pos]
};
