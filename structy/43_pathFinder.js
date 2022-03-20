// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// optimized
const pathFinder = (root, target) => {
   const res = pathFinderHelper(root, target)
   if (!res) return null
   return res.reverse()
}

const pathFinderHelper = (root, target) => {
   // todo
   if (!root) return null
   if (root.val === target) return [target]

   let left = pathFinderHelper(root.left, target)
   if (left) {
      left.push(root.val)
      return left
   }

   let right = pathFinderHelper(root.right, target)
   if (right) {
      right.push(root.val)
      return right
   }

   return null
};


// // original solve
// const pathFinder = (root, target) => {
//    // todo
//    if (!root) return null
//    if (root.val === target) return [target]

//    let left = pathFinder(root.left, target)
//    let right = pathFinder(root.right, target)

//    if (left) return [root.val, ...left]
//    if (right) return [root.val, ...right]

//    return null
// };

















module.exports = {
   pathFinder
};
