/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0
  let left = 0

  for (let i=1; i<prices.length; i++) {
      max = Math.max(max, prices[i] - prices[left])

      if (prices[i] <= prices[left]) {
          left = i
      }
  }

  return max
};