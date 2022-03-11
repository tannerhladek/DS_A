/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
   if (!grid) return 0

   let row = grid.length;
   let col = grid[0].length;
   let count = 0;

   const bfs = (r, c) => {
      let queue = [[r, c]];
      grid[r][c] = '0';

      while (queue.length) {
         let [r, c] = queue.shift();
         // add all neighbors that === '1' to the queue and set value = '0'
         // neighbors = [[r-1, c], [r+1, c], [r, c-1], [r, c+1]];

         // left
         if (r - 1 >= 0) {
            if (grid[r - 1][c] === '1') {
               grid[r - 1][c] = '0';
               queue.push([r - 1, c])
            }
         }

         // right
         if (r + 1 < row) {
            if (grid[r + 1][c] === '1') {
               grid[r + 1][c] = '0';
               queue.push([r + 1, c])
            }
         }

         // top
         if (c - 1 >= 0) {
            if (grid[r][c - 1] === '1') {
               grid[r][c - 1] = '0';
               queue.push([r, c - 1])
            }
         }

         // bottom
         if (c + 1 < col) {
            if (grid[r][c + 1] === '1') {
               grid[r][c + 1] = '0';
               queue.push([r, c + 1])
            }
         }
      }
   }

   for (let r = 0; r < row; r++) {
      for (let c = 0; c < col; c++) {
         // if position and has not been visited, add to island count + add adjoinging land to visited
         if (grid[r][c] === '1') {
            count++;
            bfs(r, c);
         }
      }
   }

   return count
};
