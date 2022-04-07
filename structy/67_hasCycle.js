const hasCycle = (graph) => {
   // todo
   for (let node in graph) {

      const visited = new Set()
      const stack = []
      graph[node].forEach(ele => {
         stack.push([node, ele])
      })

      while (stack.length) {
         const [start, end] = stack.pop()
         const pos = start + ',' + end
         if (end === node) return true
         if (!visited.has(pos)) {
            visited.add(pos)
            graph[end].forEach(ele => {
               stack.push([start, ele])
            })
         }
      }
   }

   return false
};


























module.exports = {
   hasCycle
};
