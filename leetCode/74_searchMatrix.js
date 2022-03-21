/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
   let m = matrix.length
   let n = matrix[0].length

   for (let i = 0; i < m; i++) {
      for (let j = n - 1; j >= 0; j--) {
         if (matrix[i][j] === target) {
            return true
         } else if (matrix[i][j] < target) {
            break
         }
      }
   }

   return false
};
