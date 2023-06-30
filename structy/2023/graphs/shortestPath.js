const shortestPath = (edges, nodeA, nodeB) => {
  // construct graph
  const graph = {}
  for (const edge of edges) {
    const [node1, node2] = edge
    if (!(node1 in graph)) graph[node1] = []
    if (!(node2 in graph)) graph[node2] = []
    graph[node1].push(node2)
    graph[node2].push(node1)
  }
  console.log({graph})
  const visited = new Set()
  
  const bfs = (node) => {
    const queue = [[node, 0]]
    while (queue.length) {
      const [cur, step] = queue.shift()
      if (cur === nodeB) {
        return step
      }
      if (!(visited.has(cur))) {
        visited.add(cur)
        for (const node of graph[cur]) {
          queue.push([node, step + 1])
        }
      }
    }
    
    return -1
  }
  
  return bfs(nodeA)
};