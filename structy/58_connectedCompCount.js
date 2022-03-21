const connectedComponentsCount = (graph) => {
   // todo
   let count = 0
   let visited = new Set()

   for (let key in graph) {
      if (!visited.has(key)) {
         count++
         visited.add(key)
         let stack = [key]
         while (stack.length) {
            let cur = stack.pop()
            for (let n of graph[cur]) {
               n = n.toString()
               if (!visited.has(n)) {
                  visited.add(n)
                  stack.push(n)
               }
            }
         }
      }
   }

   return count
};


























module.exports = {
   connectedComponentsCount
};
