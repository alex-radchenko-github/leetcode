var uniquePaths = function (m, n) {
let dp = Array.from({length:m}, () => Array(n).fill(1))
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      dp[i][j] = dp[i-1][j] + dp[i][j-1]
    }
  }
  return dp[m-1][n-1]
};

console.log(uniquePaths(3, 7))
