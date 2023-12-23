var minLength = function(s) {
  let res = s
  while (res.includes("AB")||res.includes("CD")){
    res = res.replaceAll("AB", '').replaceAll("CD", '')
  }
  return res.length
};
console.log(minLength("ABFCACDB"))
console.log(minLength("ACBBD"))
