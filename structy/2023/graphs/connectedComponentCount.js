const connectedComponentsCount = (graph) => {
  let count = 0
  let visited = new Set()
  
  // traversal function
  const traverse = (key) => {
    const queue = [key]
    while (queue.length) {
      const cur = String(queue.shift())
      if (!visited.has(cur)) {
        visited.add(cur)
        console.log({visited})
        queue.push(...graph[cur])
      }
    }
  }
  
  // iterate over nodes
  for (const key in graph) {
    // traverse from each unvisited node
    if (!(visited.has(key))) {
      count++
      traverse(key)
    }
  }
  
  return count
};