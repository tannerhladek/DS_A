/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function (n, reservedSeats) {
   let tracker = {};
   reservedSeats.forEach(seat => {
      let row = seat[0];
      if (!(row in tracker)) {
         tracker[row] = new Set();
         tracker[row].add(seat[1])
      } else {
         tracker[row].add(seat[1])
      }
   })

   let max = 2 * n;
   for (key in tracker) {
      let row = tracker[key];
      let tmp = 2;
      if (row.has(2) || row.has(3) || row.has(4) || row.has(5)) {
         max--;
         tmp--
      }
      if (row.has(6) || row.has(7) || row.has(8) || row.has(9)) {
         max--;
         tmp--
      }
      if (!row.has(4) && !row.has(5)) {
         if (!row.has(6) && !row.has(7))
            if (tmp === 0) max++;
      }
   }

   return max
};
