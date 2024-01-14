var maximumLength = function (s) {
  let map = new Map()
  let res = []
  
  function slWind(arr, l) {
    for (let i = 0; i < arr.length - l + 1; i++) {
      let temp = arr.slice(i, i + l)
      let tempArrStr = temp
      let set = new Set(temp)
      if (set.size === 1) {
        map.has(tempArrStr) ? map.set(tempArrStr, map.get(tempArrStr) + 1) : map.set(tempArrStr, +1)
      }
      
    }
  }
  
  for (let i = 1; i < s.length + 1; i++) {
    slWind(s, i)
  }
  let ress = Array.from(map).filter(a => a[1] >= 3).sort((a, b) => b[0].length - a[0].length)
  return ress.length > 0 ? ress[0][0].length : -1
  
};
// console.log(maximumLength("aaaa"))
console.log(maximumLength("abcaba"))
// console.log(maximumLength("abcdef"))
