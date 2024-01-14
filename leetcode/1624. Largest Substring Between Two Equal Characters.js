var maxLengthBetweenEqualCharacters = function (s) {
  let res = 0
  let map = new Map()
  for (let i = 0; i < s.length; i++) {
    
    map.has(s[i])?map.set(s[i], [...map.get(s[i]),i]):map.set(s[i],[i])
  }
  let aaa = Array.from(map).filter(a =>a [1].length > 1)
  if(aaa.length<1){
    return -1
  }
  for (let i = 0; i < aaa.length; i++) {
    res = Math.max(res, aaa[i][1][aaa[i][1].length-1]-aaa[i][1][0] -1)
  }
  return res
};

console.log(maxLengthBetweenEqualCharacters("aa"))
console.log(maxLengthBetweenEqualCharacters("abca"))
console.log(maxLengthBetweenEqualCharacters("cbzxy"))
