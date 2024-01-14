import buildTreeFromArray from "../for_interview/binary_tree.js";

let node1 = buildTreeFromArray([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4])
let node2 = buildTreeFromArray([3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8])


var leafSimilar = function (root1, root2) {
  function createLeafs(node) {
    if (!node) {
      return []
    }
    let stack = [node]
    let res = []
    while (stack.length){
      let curr = stack.pop()
      if(!curr.left &&!curr.right){
        res.push(curr.val)
      }
      if(curr.left) stack.push(curr.left)
      if(curr.right) stack.push(curr.right)
    }
    return res
  }
  
return createLeafs(root2).toString()===createLeafs(root1).toString()
}
console.log(leafSimilar(node1, node2))
