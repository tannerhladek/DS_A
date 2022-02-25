/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
   if (prices.length < 2) return 0;

   let left = 0;
   let right = 1;
   let maxProfit = 0;

   for (let i = 1; i < prices.length; i++) {
      if (prices[right] > prices[left]) {
         let profit = prices[right] - prices[left];
         maxProfit = Math.max(profit, maxProfit);
      } else {
         left = right;
      }
      right++;
   }

   return maxProfit
};
