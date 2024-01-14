var minPathSum = function (grid) {
  let dp = grid
  for (let i = 1; i < dp[0].length; i++) {
    dp[0][i] = dp[0][i - 1] + dp[0][i]
  }
  
  for (let i = 1; i < dp.length; i++) {
    dp[i][0] = dp[i - 1][0] + dp[i][0]
  }
  
  
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      dp[i][j] = Math.min(dp[i][j] + dp[i - 1][j], dp[i][j - 1] + dp[i][j])
    }
    
  }
return dp[dp.length-1][dp[dp.length-1].length-1]
};

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]))
console.log(minPathSum([[1,2,3],[4,5,6]]))
// [1,3,1]
// [1,5,1]
// [4,2,1]
