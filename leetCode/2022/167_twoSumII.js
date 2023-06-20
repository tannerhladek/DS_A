/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
   let l = 0
   let r = numbers.length - 1

   while (l < r) {
      let n1 = numbers[l]
      let n2 = numbers[r]
      let sum = n1 + n2

      if (sum === target) return [l + 1, r + 1]
      else if (sum > target) r--
      else l++
   }
};
