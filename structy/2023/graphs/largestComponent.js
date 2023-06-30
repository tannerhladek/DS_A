const largestComponent = (graph) => {
  let max = 0
  const visited = new Set()
  
  const traverse = (node) => {
    let count = 0
    const stack = [node]
    while (stack.length) {
      const cur = String(stack.pop())
      if (!visited.has(cur)) {
        count++
        visited.add(cur)
        stack.push(...graph[cur])
      }
    }
    console.log({count})
    return count
  }
  
  // iterate over nodes
  for (const node in graph) {
    if (!(visited.has(node))) {
      const count = traverse(node)
      max = Math.max(max, count)
    }
  }
  return max
};