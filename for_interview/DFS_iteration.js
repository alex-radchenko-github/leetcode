import buildTreeFromArray from "./binary_tree.js";

let node = buildTreeFromArray([3, 5, 1, 6, 2, 9, 8, 7, 4, 1])

function findCombinationsSummingToTarget(root) {
  let res = []
  let stack = [root]
  while (stack.length){
    let curr = stack.pop()
    res.push(curr.val)
    if(curr.left) stack.push(curr.left)
    if(curr.right) stack.push(curr.right)
    
  }
  return res
}

console.log(findCombinationsSummingToTarget(node));
