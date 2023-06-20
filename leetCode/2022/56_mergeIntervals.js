/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// attempt 1
var merge = function (intervals) {
   intervals.sort((a, b) => a[0] - b[0])

   let i = 0
   while (i < intervals.length - 1) {
      if (intervals[i][1] >= intervals[i + 1][0]) {
         const merged = [intervals[i][0], Math.max(intervals[i][1], intervals[i + 1][1])]
         intervals.splice(i, 2, merged)
      } else {
         i++
      }
   }

   return intervals
};
