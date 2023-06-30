const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = {}
  
  // build graph
  for (const edge of edges) {
    if (!(edge[0] in graph)) {
      graph[edge[0]] = []
    }
    if (!(edge[1] in graph)) {
      graph[edge[1]] = []
    }
    graph[edge[0]].push(edge[1])
    graph[edge[1]].push(edge[0])
  }
  
  const queue = [nodeA]
  const visited = new Set()
  
  while (queue.length) {
    const cur = queue.shift()
    if (cur === nodeB) {
      return true
    }
    
    if (!visited.has(cur)) {
      visited.add(cur)
      queue.push(...graph[cur])
    }
  }
  
  return false
};