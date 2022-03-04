/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
   let left = top = 0;
   let right = bottom = matrix.length - 1;

   while (left < right) {
      for (let i = 0; i < right-left; i++) {
         let topLeft = matrix[top][left + i];
         matrix[top][left + i] = matrix[bottom - i][left];
         matrix[bottom - i][left] = matrix[bottom][right - i];
         matrix[bottom][right - i] = matrix[top + i][right];
         matrix[top + i][right] = topLeft
      }
      left += 1; // 1
      right -= 1; // 2
      top = left; // 1
      bottom = right; // 2
   }
};
