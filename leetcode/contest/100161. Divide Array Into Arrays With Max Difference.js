var divideArray = function (nums, k) {
  let res = []
  if (nums.length % 3 !== 0) {
    return []
  } else {
    nums = nums.sort((a, b) => a - b)
    let count = 0
    let temparr = []
    for (let i = 0; i < nums.length; i++) {
      if (count === 3) {
        count = 0
        res.push(temparr)
        temparr = []
        temparr.push(nums[i])
        count += 1
      } else {
        temparr.push(nums[i])
        count += 1
      }
    }
    res.push(temparr)
  }
  for (let i = 0; i < res.length; i++) {
    if((res[i][2] - res[i][0]) > k && res[i][2] - res[i][0] !== 0) {
      return []
    }
  }
  return res
};

console.log(divideArray([1, 3, 4, 8, 7, 9, 3, 5, 1], 2))
console.log(divideArray([1, 3, 3, 2, 7, 3], 3))
console.log(divideArray([4, 2, 9, 8, 2, 12, 7, 12, 10, 5, 8, 5, 5, 7, 9, 2, 5, 11], 14))
