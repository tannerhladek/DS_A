const closestCarrot = (grid, startRow, startCol) => {
   // todo
   let visited = new Set()
   let queue = [[startRow, startCol, 0]]

   while (queue.length) {
      const [row, col, dis] = queue.shift()

      const pos = row + ',' + col
      if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === 'X' || visited.has(pos)) continue
      if (grid[row][col] === 'C') return dis

      visited.add(pos)
      console.log(visited)
      queue.push([row + 1, col, dis + 1], [row - 1, col, dis + 1], [row, col + 1, dis + 1], [row, col - 1, dis + 1])
   }

   return -1
};
























module.exports = {
   closestCarrot
};
