function subarraySumFixed(nums, k) {
  let res = nums.slice(0, k).reduce((a, b) => a + b)
  let summ = nums.slice(0, k).reduce((a, b) => a + b)
  let l = 0
  let length = 0
  for (let i = 3; i < nums.length; i++) {
    summ = summ-nums[l]+nums[i]
    res = Math.max(res, summ)
    l++
  }
  return res
}

console.log(subarraySumFixed([1, 2, 3, 7, 4, 1], 3)) //14
