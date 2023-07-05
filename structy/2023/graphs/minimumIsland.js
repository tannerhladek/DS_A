const minimumIsland = (grid) => {
  let min = Infinity
  
  const traverse = (i,j) => {
    let count = 0
    const queue = [[i,j]]
    
    while (queue.length) {
      const [r, c] = queue.shift()
      if (grid[r][c] === "L") {
        count++
        grid[r][c] = "W"
        if (r-1 >= 0) {
          queue.push([r-1, c])
        }
        if (r+1 < grid.length) {
          queue.push([r+1, c])
        }
        if (c-1 >= 0) {
          queue.push([r, c-1])
        }
        if (c+1 < grid[r].length) {
          queue.push([r, c+1])
        }
      }
    }
    console.log({count})
    return count
  }
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "L") {
        const size = traverse(i,j)
        min = Math.min(min, size)
      }
    }
  }
  
  return min
};

module.exports = {
  minimumIsland,
};
