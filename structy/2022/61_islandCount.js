const islandCount = (grid) => {
   // todo
   let count = 0;
   let visited = new Set()

   for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
         let pos = i + ',' + j
         if (grid[i][j] === 'L' && !visited.has(pos)) {
            count++
            explore(grid, i, j, visited)
         }
      }
   }
   return count
};

const explore = (grid, i, j, visited) => {
   let pos = i + ',' + j

   if (visited.has(pos)) return
   if (i < 0 || j < 0 ||
      i >= grid.length ||
      j >= grid[0].length) return
   if (grid[i][j] === 'W') return

   visited.add(pos)

   explore(grid, i - 1, j, visited)
   explore(grid, i + 1, j, visited)
   explore(grid, i, j - 1, visited)
   explore(grid, i, j + 1, visited)
   return
}


























module.exports = {
   islandCount
};
