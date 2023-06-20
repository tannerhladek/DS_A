/**
 * @param {number[]} nums
 * @return {number}
 */


// using XOR
var singleNumber = function (nums) {
   let sum = 0
   nums.forEach((num) => sum = sum ^ num)
   return sum
};


// // useing obj counter
// var singleNumber = function (nums) {
//    let counter = {};

//    for (let i = 0; i < nums.length; i++) {
//       let currNum = nums[i];
//       if (currNum in counter) {
//          counter[currNum]++;
//       } else {
//          counter[currNum] = 1
//       }
//    }

//    for (let i = 0; i < nums.length; i++) {
//       let currNum = nums[i];
//       if (counter[currNum] === 1) return currNum
//    }
// };
