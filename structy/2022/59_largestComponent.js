const largestComponent = (graph) => {
   // todo
   let largest = 0
   let visited = new Set()

   for (let node in graph) {
      let count = dfs(graph, node, visited)
      if (count > largest) largest = count
   }

   return largest
};


const dfs = (graph, node, visited) => {
   let count = 0;
   let stack = [node]

   while (stack.length) {
      let cur = stack.pop()
      if (!visited.has(cur)) {
         count++
         visited.add(cur)
         for (let neigh of graph[cur]) {
            stack.push(neigh)
         }
      }
   }

   return count
}


























module.exports = {
   largestComponent
};
