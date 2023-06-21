// // O(nlogn)
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// var topKFrequent = function(nums, k) {
//   const map = {}

//   for (const num of nums) {
//       if (!(num in map)) {
//           map[num] = 0
//       }
//       map[num]++
//   }

//   const sorted = Object.entries(map).sort((a,b) => {
//       return b[1] - a[1]
//   })

//   const res = []

//   let count = 0

//   while (count < k) {
//       res.push(Number(sorted[count][0]))
//       count++
//   }

//   return res
// };

// bucket sort
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const map = {}

  for (const num of nums) {
      if (!(num in map)) {
          map[num] = 0
      }
      map[num]++
  }

  // bucket sort
  const bucket = [];
    for (let i = 0; i <=nums.length; i++) {
        bucket[i] = []
    }
  
    for (const [num, count] of Object.entries(map)) {
        bucket[count].push(num)
    }

    const res = [];

    for (let i = bucket.length - 1; i >= 0; i--) {
        for (const ele of bucket[i]) {
            res.push(ele)
            if (res.length === k ) {
                return res
            }
        }
    }
};