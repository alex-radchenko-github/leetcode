var minOperations = function (nums) {
  let res = 0
  
  function hashMapFromArrayObject(nums) {
    let map = {}
    for (let c of nums) {
      if (c in map) {
        map[c]++
      } else {
        map[c] = 1
      }
    }
    return map
  }
  
  
  let map = hashMapFromArrayObject(nums)
  console.log(map)
  for (const mapElement in map) {
    if (map[mapElement] === 1) {
      return -1
    } else {
      if (map[mapElement] % 3 === 0) {
        res += map[mapElement] / 3
      } else if (map[mapElement] % 3 === 1) {
        
        res += ((map[mapElement] - 3 - 1) / 3) + 2
      } else if (map[mapElement] % 3 === 2) {
        res += ((map[mapElement] - 2) / 3) + 1
      }
    }
  }
  return res
};
console.log(minOperations([2, 3, 3, 2, 2, 4, 2, 3, 4]))
console.log(minOperations([14, 12, 14, 14, 12, 14, 14, 12, 12, 12, 12, 14, 14, 12, 14, 14, 14, 12, 12]))
