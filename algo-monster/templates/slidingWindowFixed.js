function subarraySumFixed(nums, k) {
  let res = nums.slice(0, k).reduce((a, b) => a + b)
  let sum = nums.slice(0, k).reduce((a, b) => a + b)
  let l = 0
  let length = 0
  for (let i = 3; i < nums.length; i++) {
    sum = sum-nums[l]+nums[i]
    res = Math.max(res, sum)
    l++
  }
  return res
}
