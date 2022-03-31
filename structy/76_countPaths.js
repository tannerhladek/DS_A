// const countPaths = (grid, r = 0, c = 0, memo = {}) => {
//    // todo
//    const m = grid.length - 1
//    const n = grid[0].length - 1
//    const str = r.toString() + ',' + c.toString()

//    if (str in memo) return memo[str]
//    if (r > m || c > n) return 0
//    if (grid[r][c] === 'X') return 0
//    if (r === m && c === n) return 1

//    memo[str] = countPaths(grid, r + 1, c, memo) + countPaths(grid, r, c + 1, memo)

//    return memo[str]
// };


// round 2
const countPaths = (grid, r = 0, c = 0, memo = {}) => {
   // todo
   const pos = r + ',' + c

   if (pos in memo) return memo[pos]

   if (r >= grid.length || r < 0 || c >= grid[0].length || c < 0) return 0
   if (grid[r][c] === 'X') return 0
   if (r === grid.length - 1 && c === grid[0].length - 1 && grid[r][c] === 'O') return 1

   memo[pos] = countPaths(grid, r + 1, c, memo) + countPaths(grid, r, c + 1, memo)

   return memo[pos]
};



















module.exports = {
   countPaths
};
