function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}


export default function buildTreeFromArray(arr) {
  if (!arr.length) return null;
  let root = new TreeNode(arr[0]);
  let queue = [root];
  let i = 1;
  
  while (queue.length && i < arr.length) {
    let currentNode = queue.shift();
    
    if (arr[i] !== null && arr[i] !== undefined) {
      currentNode.left = new TreeNode(arr[i]);
      queue.push(currentNode.left);
    }
    i++;
    
    if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
      currentNode.right = new TreeNode(arr[i]);
      queue.push(currentNode.right);
    }
    i++;
  }
  
  return root;
}


// module.exports = {
//   buildTreeFromArray
// };
