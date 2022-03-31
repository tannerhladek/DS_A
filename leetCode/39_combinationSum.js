var combinationSum = function (candidates, target) {
   let res = []

   const dfs = (i, curPath = [], total = 0) => {
      // base cases
      debugger
      if (total === target) {
         debugger
         let copy = [...curPath]
         res.push(copy)
         return
      }
      if (i >= candidates.length || total > target) {
         debugger
         return
      }

      let num = candidates[i]
      debugger
      curPath.push(num)
      debugger
      dfs(i, curPath, total + num)
      curPath.pop()
      debugger
      dfs(i + 1, curPath, total)
   }
   debugger
   dfs(0)
   debugger
   return res
};

let candidates = [2, 3, 6, 7], target = 7
combinationSum(candidates, target)
