var shortestBeautifulSubstring = function (s, k) {
  let a = []
  let left = 0
  let right = 0
  let count = 0
  // console.log(s[right])
  while (left <= right) {
    if (s[right] === "1") {
      right++
      count++
    } else if (s[right] === "0") {
      right++
    }
    if (count === 3) {
      a.push(s.slice(left, right))
    }
    if (count > 3) {
      right--
      left++
    }
    
  }
  console.log(a)
  
};
console.log(shortestBeautifulSubstring("100011001", 3))
// 100011
// 1000110
// 10001100
// 00011001
// 0011001
// 011001
// 11001
