const hasPath = (graph, src, dst) => {
   // todo
   let queue = [src]

   while (queue.length) {
      const cur = queue.shift()
      if (cur === dst) return true
      queue.push(...graph[cur])
   }

   return false
};


























module.exports = {
   hasPath
};
