var missingInteger = function (nums) {
  let sum = nums[0]
  
  function hashMapFromArrayMap(nums) {
    
    let map = new Map()
    for (let c of nums) {
      map.has(c) ? map.set(c, map.get(c) + 1) : map.set(c, 1)
    }
    return map
  }
  
  let map = hashMapFromArrayMap(nums)
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      sum = sum + nums[i]
    } else {
      break
    }
  }
  while (map.has(sum) === true){
    sum++
  }
  return sum
};
console.log(missingInteger([1, 2, 3, 2, 5]))
console.log(missingInteger([3, 4, 5, 1, 12, 14, 13]))
console.log(missingInteger([29, 30, 31, 32, 33, 34, 35, 36, 37]))
