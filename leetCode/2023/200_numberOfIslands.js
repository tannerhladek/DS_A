/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let visited = new Set();
  let count = 0
  
  for (let i = 0; i < grid.length; i++ ) {
      for (let j = 0; j < grid[i].length; j++) {
          let cur = grid[i][j]

          if (cur === "1" && !visited.has(`${i},${j}`)) {
              count++
              visited = traverse(i,j,visited,grid)
          }
      }
  }

  return count 
};

const traverse = (i,j,visited, grid) => {
  const queue = [`${i},${j}`]
  const newVisited = visited
  while (queue.length) {
      const cur = queue.shift()
      if (!newVisited.has(cur)) {
          newVisited.add(cur)
          const x = parseInt(cur.split(',')[0])
          const y = parseInt(cur.split(',')[1])
          if (grid[x][y] === "1") {
              // left
              if (x-1 >= 0) {
                  queue.push(`${x-1},${y}`)
              }
              //right
              if (x+1 < grid.length) {
                  queue.push(`${x+1},${y}`)
              }
              // top
              if (y-1 >= 0) {
                  queue.push(`${x},${y-1}`)
              }
              //bottom
              if (y+1 < grid[x].length) {
                  queue.push(`${x},${y+1}`)
              }
          }
      }
  }

  return newVisited
}