var spiralOrder = function (matrix) {
   let top = 0
   let left = 0
   let right = matrix[0].length - 1
   let bottom = matrix.length - 1
   let result = []

   while (top <= bottom && left <= right) {

      for (let i = 0; i <= right - left; i++) {
         result.push(matrix[top][left + i])
      }
      top++

      for (let i = 0; i <= bottom - top; i++) {
         result.push(matrix[top + i][right])
      }
      right--

      if (top > bottom) break

      for (let i = right; i >= left; i--) {
         result.push(matrix[bottom][i])
      }
      bottom--

      if (right < left) break

      for (let i = bottom; i >= top; i--) {
         result.push(matrix[i][left])
      }
      left++

   }
   return result
};
