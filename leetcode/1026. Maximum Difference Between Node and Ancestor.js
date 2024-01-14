import buildTreeFromArray from "../for_interview/binary_tree.js";

let bTree = buildTreeFromArray([8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13])


var maxAncestorDiff = function (root) {
  if (!root) {
    return 0
  }
  let diff = 0
  let stack = [{curr:root, minVal: root.val, maxVal:root.val}]
  
  while (stack.length) {
    let {curr, minVal, maxVal} =  stack.pop()
    diff = Math.max(diff, Math.abs(curr.val - minVal), Math.abs(curr.val - maxVal))
    
    minVal = Math.min(minVal, curr.val)
    maxVal = Math.max(maxVal, curr.val)
    
    if (curr.left) stack.push({curr: curr.left, minVal, maxVal})
    if (curr.right) stack.push({curr: curr.right, minVal, maxVal})
  }
  return diff
};
console.log(maxAncestorDiff(bTree))
