/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
   let res = [];

   for (let i = 0; i <= n; i++) {
      let bNum = i.toString(2);
      res.push((bNum.split('1').length - 1));
   }

   return res
};
