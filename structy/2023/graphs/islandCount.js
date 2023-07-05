const islandCount = (grid) => {
  let count = 0
  
  const traverse = (i, j) => {
    const queue = [[i, j]];
    
    while (queue.length) {
      const [r,c] = queue.shift()
      if (grid[r][c] === "L") {
        grid[r][c] = "W"
        if (r-1 >= 0) {
          queue.push([r-1,c])
        }
        if (r+1 < grid.length) {
          queue.push([r+1,c])
        }
        if (c-1 >= 0) {
          queue.push([r,c-1])
        }
        if (c+1 < grid[r].length) {
          queue.push([r,c+1])
        }
      }
    }
  }
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "L") {
        count++
        traverse(i,j)
      }
    }
  }
  
  return count
};

module.exports = {
  islandCount,
};
