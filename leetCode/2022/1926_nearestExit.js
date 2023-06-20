/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
   const m = maze.length
   const n = maze[0].length

   let exitRows = [0, m - 1]
   let exitCols = [0, n - 1]

   let steps = 0;
   let visited = new Set()
   let queue = [entrance]

   while (queue.length) {
      let len = queue.length

      for (let i = 0; i < len; i++) {
         let [r, c] = queue.shift()
         if (r < 0 || c < 0 || r >= m || c >= n || visited.has(`${r},${c}`) || maze[r][c] === '+') {
            continue
         }

         visited.add(`${r},${c}`)

         // can we exit?
         if (!(r === entrance[0] && c === entrance[1]) &&
            (exitRows.includes(r) || exitCols.includes(c))) {
            return steps
         }

         // add neighbors to queue
         queue.push([r + 1, c], [r - 1, c], [r, c + 1], [r, c - 1])
      }

      steps++
   }

   return -1
};
