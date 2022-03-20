// DF recursive
const treeValueCount = (root, target) => {
   if (!root) return 0
   let count = 0
   if (root.val === target) count = 1

   return count + treeValueCount(root.left, target) + treeValueCount(root.right, target)
}

// // depth first iterative
// const treeValueCount = (root, target) => {
//    // todo
//    if (!root) return 0

//    let stack = [root]
//    let count = 0

//    while (stack.length) {
//       const cur = stack.pop()
//       if (cur.val === target) count++
//       if (cur.left) stack.push(cur.left)
//       if (cur.right) stack.push(cur.right)
//    }

//    return count
// };
