var lengthOfLIS = function (nums) {
  if (nums.length === 0) {
    return 0
  }
  let lenNums = nums.length
  let dp = Array(lenNums).fill(1)
  for (let i = 0; i < lenNums; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) (
        dp[i] = Math.max(dp[i], dp[j] + 1)
      )
    }
  }
  return Math.max(...dp)
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));
// 1,1,1,2,2,1,1,0
// [0,1,0,3,2,3]
// 0,1,0,3,3,4
