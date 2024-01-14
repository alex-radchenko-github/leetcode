var maximumLength = function (str) {
  let map = new Map()
  for (let i = 0; i < str.length; i++) {
    map.has(str[i]) ? map.set(str[i], map.get(str[i]) + 1) : map.set(str[i], 1)
  }
  console.log(map)
  let subStr = []
  let corrent = str[0]
  for (let i = 1; i < str.length; i++) {
    if (corrent === str[i]) {
      corrent += str[i]
    } else {
      subStr.push(corrent)
      corrent = str[i]
    }
  }
  console.log(subStr)
};
console.log(maximumLength("aaaa"))
console.log(maximumLength("abcaba"))
console.log(maximumLength("abcdef"))
