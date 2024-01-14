import buildTreeFromArray from "../for_interview/binary_tree.js";

let node = buildTreeFromArray([10, 5, 15, 3, 7, null, 18])
var rangeSumBST = function (root, low, high) {
  if (!root) {
    return 0
  }
  let res = 0
  let stack = [root]
  while (stack.length) {
    let curr = stack.pop()
    if (low <= curr.val && curr.val <= high) {
      res += curr.val
    }
    if(curr.left) stack.push(curr.left)
    if(curr.right)  stack.push(curr.right)
  }
  return res
};
console.log(rangeSumBST(node, 7, 15))

























