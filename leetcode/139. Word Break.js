const memo = {}
function wordBreak(s, words) {;
  
  function dfs(startIndex) {
    if (startIndex === s.length) return true;
    
    if (startIndex in memo) return memo[startIndex];
    
    let ans = false;
    for (const word of words) {
      if (s.slice(startIndex).startsWith(word)) {
        if (dfs(startIndex + word.length)) {
          ans = true;
          break;
        }
      }
    }
    memo[startIndex] = ans;
    return ans;
  }
  
  return dfs(0);
}


// var wordBreak = function (s, wordDict) {
//   const wordSet = new Set(wordDict);
//   const dp = new Array(s.length + 1).fill(false);
//   dp[0] = true;  // empty string is always a valid sequence
//
//   for (let i = 1; i <= s.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (dp[j] && wordSet.has(s.substring(j, i))) {
//         dp[i] = true;
//         break;
//       }
//     }
//   }
//
//   return dp[s.length];
// }


console.log(wordBreak("leetcode", ["leet", "code"]), memo)
