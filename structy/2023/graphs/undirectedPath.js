const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = {}
  
  // build graph
  for (const edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = []
    if (!(b in graph)) graph[b] = []
    graph[a].push(b)
    graph[b].push(a)
  }
  
  const visited = new Set();
  const queue = [nodeA]
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
