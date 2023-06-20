const bestBridge = (grid) => {
   // todo
   const island1 = []

   for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
         if (grid[i][j] === 'L') {
            markIsland(grid, i, j, island1)
            i = grid.length
            break
         }
      }
   }

   let queue = []
   const visited = new Set()
   for (let island of island1) {
      const [r, c] = island
      queue.push([r, c, 0])
   }

   while (queue.length) {
      const [r, c, dis] = queue.shift()

      if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) continue

      const pos = r + ',' + c + ',' + dis
      if (!visited.has(pos)) {
         visited.add(pos);
         if (grid[r][c] === 'L') {
            return dis - 1
         } else {
            queue.push([r + 1, c, dis + 1], [r - 1, c, dis + 1], [r, c + 1, dis + 1], [r, c - 1, dis + 1])
         }
      }
   }
};

const markIsland = (grid, r, c, island1) => {
   let stack = [[r, c]]
   while (stack.length) {
      const [row, col] = stack.pop()
      if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] !== 'L') continue
      grid[row][col] = 'L1'
      island1.push([row, col])
      stack.push([row - 1, col], [row + 1, col], [row, col + 1], [row, col - 1])
   }
   return
}




















module.exports = {
   bestBridge
};
