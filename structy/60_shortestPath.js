const shortestPath = (edges, nodeA, nodeB) => {
   const graph = makeGraph(edges);
   let visited = new Set()
   let queue = [[nodeA, 0]]

   while (queue.length) {
      let [cur, dis] = queue.shift()

      if (cur === nodeB) return dis

      for (let neigh of graph[cur]) {
         if (!visited.has(neigh)) {
            visited.add(neigh)
            queue.push([neigh, dis + 1])
         }
      }
   }

   return -1
};

const makeGraph = (edges) => {
   let res = {}

   for (let edge of edges) {
      const [a, b] = edge
      if (!(a in res)) res[a] = [];
      if (!(b in res)) res[b] = [];
      res[a].push(b);
      res[b].push(a);
   }

   return res
}



























module.exports = {
   shortestPath
};
