const undirectedPath = (edges, nodeA, nodeB) => {
   const graph = {}

   for (let edge of edges) {
      let [i, j] = edge
      if (!(i in graph)) graph[i] = []
      if (!(j in graph)) graph[j] = []
      graph[i].push(j)
      graph[j].push(i)
   }

   let queue = [nodeA]
   let visited = new Set()

   while (queue.length) {
      let cur = queue.shift()
      if (cur === nodeB) return true
      if (!visited.has(cur)) {
         visited.add(cur)
         queue.push(...graph[cur])
      }
   }

   return false
};



























module.exports = {
   undirectedPath
};
