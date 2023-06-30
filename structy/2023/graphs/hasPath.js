const hasPath = (graph, src, dst) => {
  const queue = [src]
  
  while (queue.length) {
    const cur = queue.shift()
    if (cur === dst) {
      return true
    }
    queue.push(...graph[cur])
  }
  
  return false
};