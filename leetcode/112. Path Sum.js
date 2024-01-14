const {buildTreeFromArray} = require('../for_interview/binary_tree.js')

function hasPathSum(root, targetSum) {
  if (!root) return false;
  let stack = [root]
  let summStack = [targetSum - root.val]
  
  while (stack.length) {
    let curr = stack.pop()
    let currSum  = summStack.pop()
    
    if(!curr.left&&!curr.right&&currSum===0){
      return true
    }
    
    if(curr.left){
      stack.push(curr.left)
      summStack.push(currSum-curr.left.val)
    }
    if(curr.right){
      stack.push(curr.right)
      summStack.push(currSum-curr.right.val)
    }
  }
  return false
}


// const tree = buildTreeFromArray([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]);
const tree = buildTreeFromArray([1,2,3]);
console.log(hasPathSum(tree, 5))
