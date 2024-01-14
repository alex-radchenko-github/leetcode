var shortestToChar = function (s, c) {
  let length = s.length
  let res = new Array(length).fill(Infinity)
  let res2 = new Array(length).fill(-Infinity)
  
  let pointChar = -Infinity
  for (let i = 0; i < length; i++) {
    if (s[i] === c) {
      pointChar = i
    }
    res[i] = i - pointChar
  }
  
  s = s.split("").reverse()
  pointChar = Infinity
  for (let i = 0; i < length; i++) {
    if (s[i] === c) {
      pointChar = i
    }
    res2[i] = i - pointChar
  }
  
  res2.reverse()
  for (let i = 0; i < length; i++) {
    if (res[i] === -Infinity || res2[i] === -Infinity) {
      res[i] = Math.max(res[i], res2[i])
    } else {
      res[i] = Math.min(res[i], res2[i])
    }
  }
  return res
};
console.log(shortestToChar("loveleetcode", "e"))
console.log(shortestToChar("aaba", "b"))

//3,2,1,0,1,0,0,1,2,2,1,0
