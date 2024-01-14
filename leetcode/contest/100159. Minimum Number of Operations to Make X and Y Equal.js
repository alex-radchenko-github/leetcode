var minimumOperationsToMakeEqual = function(x, y) {
  let queue = [[x, 0]];
  let visited = new Set([x]);
  
  while (queue.length > 0) {
    let [currentX, operations] = queue.shift();
    
    if (currentX === y) {
      return operations;
    }
    
    let nextStates = [
      currentX + 1,
      currentX - 1,
      currentX % 11 === 0 ? currentX / 11 : currentX,
      currentX % 5 === 0 ? currentX / 5 : currentX
    ];
    
    for (let nextX of nextStates) {
      if (!visited.has(nextX)) {
        queue.push([nextX, operations + 1]);
        visited.add(nextX);
      }
    }
  }
  
  return -1;

};
console.log(minimumOperationsToMakeEqual(26,1)) //3
console.log(minimumOperationsToMakeEqual(54,2)) //4
console.log(minimumOperationsToMakeEqual(25,30)) //5
