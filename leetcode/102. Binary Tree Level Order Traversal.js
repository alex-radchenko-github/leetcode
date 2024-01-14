import buildTreeFromArray from "../for_interview/binary_tree.js";

let node = buildTreeFromArray([3, 9, 20, null, null, 15, 7])

var levelOrder = function (root) {
  let res = [];
  let queue = [root];
  while (queue.length) {
    const n = queue.length;
    let new_level = [];
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      console.log(node.val)
      // new_level.push(node.val);
 
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
      
    }
    res.push(new_level);
  }
  return res
  
};

console.log(levelOrder(node))
