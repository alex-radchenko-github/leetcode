var findLHS = function (nums) {
  let max = 0
  let res = []
  nums = nums.sort((a, b) => a - b)
  let map = new Map()
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] === 1) {
      res.push([nums[i + 1], nums[i]])
    }
    
  }
  if (res.length === 0) {
    return 0
  }
  for (let i = 0; i < nums.length; i++) {
    map.has(nums[i]) ? map.set(nums[i], map.get(nums[i]) + 1) : map.set(nums[i], 1)
  }
  for (let i = 0; i < res.length; i++) {
    max = Math.max(max, map.get(res[i][0])+ map.get(res[i][1]))
  }
  return  max
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]))
console.log(findLHS([1, 2, 3, 4]))
console.log(findLHS([1, 1, 1, 1]))
console.log(findLHS([1, 3, 5, 7, 9, 11, 13, 15, 17]))
console.log(findLHS([-3, -1, -1, -1, -3, -2])) //4
console.log(findLHS([3, 2, 1])) //4

