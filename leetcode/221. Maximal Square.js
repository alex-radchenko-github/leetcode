var maximalSquare = function (matrix) {
  matrix.forEach(row => {
    console.log(row.join(' '))
  })
  console.log("==================")
  let res = 0
  let dp = Array.from({length: matrix.length}, () => Array(matrix[0].length).fill(0))
  
  for (let i = 0; i < matrix.length; i++) {
    dp[i][0] = matrix[i][0]
    res = Math.max(res, dp[i][0])
  }
  
  for (let i = 0; i < matrix[0].length; i++) {
    dp[0][i] = matrix[0][i]
    res = Math.max(res, dp[0][i])
  }
  
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j] == 0) continue
      dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1
      res = Math.max(dp[i][j], res)
      
    }
    
  }
  
  dp.forEach(row => {
    console.log(row.join(' '))
  })
  return res * res
}

console.log(maximalSquare([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]));
// console.log(maximalSquare([["0", "1"], ["1", "0"]]));
// console.log(maximalSquare([["0", "0", "0"], ["0", "0", "0"], ["0", "0", "0"]]));
