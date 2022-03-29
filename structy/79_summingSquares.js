const summingSquares = (n) => {
   // todo
   const squares = []
   for (let i = 1; i <= n; i++) {
      const sq = i * i
      if (sq > n) break
      else squares.push(sq)
   }

   let visited = new Set()
   let queue = [[n, 1]]

   while (queue.length) {
      let [num, count] = queue.shift()
      for (let i = squares.length - 1; i >= 0; i--) {
         let sq = squares[i]
         if (num - sq === 0) return count
         else {
            if (!visited.has(num - sq)) {
               visited.add(num - sq)
               queue.push([num - sq, count + 1])
            }
         }
      }
   }
};






















module.exports = {
   summingSquares
};
