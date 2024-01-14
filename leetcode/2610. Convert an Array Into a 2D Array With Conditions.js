var findMatrix = function (nums) {
  console.log( new Set(nums))
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    map.has(nums[i]) ? map.set(nums[i], map.get(nums[i]) + 1) : map.set(nums[i], 1)
  }
  let arrTemp = Array.from(map).sort((a, b) => b[1] - a[1])
  let length = arrTemp[0][1];
  let res = Array.from({ length }, () => []);
  for (let i = 0; i < arrTemp.length; i++) {
    for (let j = 0; j < arrTemp[i][1]; j++) {
      res[j].push(arrTemp[i][0])
    }
  }
  return res
  
}
console.log(findMatrix([1, 3, 4, 1, 2, 3, 1]))
console.log(findMatrix([8, 8, 8, 8, 2, 4, 4, 2, 4]))
