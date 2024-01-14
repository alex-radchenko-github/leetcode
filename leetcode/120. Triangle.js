var minimumTotal = function (triangle) {
  let dp = triangle
  for (let i = 1; i < dp.length; i++) {
    
    dp[i][dp[i].length - 1] = dp[i][dp[i].length - 1] + dp[i - 1][dp[i - 1].length - 1]
    dp[i][0] = dp[i][0] + dp[i - 1][0]
  }
  for (let i = 2; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length - 1; j++) {
      dp[i][j] = Math.min(dp[i][j] + dp[i - 1][j - 1], dp[i][j] + dp[i - 1][j])
    }
  }
  return Math.min(...dp[dp.length - 1])
}
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]))
console.log(minimumTotal([[-1], [2, 3], [1, -1, -3]])) //-1
