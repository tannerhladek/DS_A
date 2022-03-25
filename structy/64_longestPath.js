const longestPath = (graph) => {
   // todo
   res = 0
   for (let node in graph) {
      let dis = explore(graph, node)
      res = Math.max(res, dis)
   }
   return res
};

const explore = (graph, node) => {
   let stack = [[node, 0]]
   let max = 0

   while (stack.length) {
      const [cur, dis] = stack.pop()
      max = Math.max(max, dis)
      for (let n of graph[cur]) {
         stack.push([n, dis + 1])
      }
   }

   return max
}

























module.exports = {
   longestPath
};
