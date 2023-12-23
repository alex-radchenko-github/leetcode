var findMissingAndRepeatedValues = function (grid) {
  let set = new Set()
  let res = []
  let aaa = []
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      aaa.push(grid[i][j])
    }
  }
  for (let i = 0; i < aaa.length; i++) {
    if(set.has(aaa[i])){
      res.push(aaa[i])
    } else {
      set.add(aaa[i])
    }
  }
  for (let i = 1; i < aaa.length + 1 ; i++) {
    if(!set.has(i)){
      res.push(i)
    }
  }
  return res
};

console.log(findMissingAndRepeatedValues([[1, 3], [2, 2]]))
console.log(findMissingAndRepeatedValues([[9, 1, 7], [8, 9, 2], [3, 4, 6]]))
