/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
   let digits = '0123456789';
   let res = new Set();
   res.add(s);
   let queue = [s]

   for (let i = 0; i < s.length; i++) {
      let char = s[i];
      if (!digits.includes(char)) {
         let len = queue.length
         for (let j = 0; j < len; j++) {
            let cur = queue[j]
            let tmp = cur.substring(0, i) + char.toUpperCase() + cur.substring(i + 1)
            res.add(tmp);
            queue.push(tmp)
            tmp = cur.substring(0, i) + char.toLowerCase() + cur.substring(i + 1)
            res.add(tmp);
            queue.push(tmp)
         }
      }
   }

   return Array.from(res)
};
