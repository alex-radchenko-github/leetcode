var longestPalindrome = function (s) {
  let res = ""
  
  function check(i, type) {
    let l = i
    let r
    type === true ? r = i : r = i + 1
    while (l >= 0 && r < s.length && l <= r) {
      if (s[l] !== s[r]) {
        break
      }
      if (r - l + 1 > res.length) {
        res = s.slice(l, r + 1)
      }
      l -= 1
      r += 1
    }
  }
  
  for (let i = 0; i < s.length; i++) {
    check(i, true)
    check(i, false)
  }
  return res
};
console.log(longestPalindrome("babad"))
console.log(longestPalindrome("cbbd"))
console.log(longestPalindrome("a"))
console.log(longestPalindrome("ccd"))
