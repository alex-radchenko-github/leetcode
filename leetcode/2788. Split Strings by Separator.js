var splitWordsBySeparator = function (words, separator) {
  let res = []
  for (let i = 0; i < words.length; i++) {
    res.push(...words[i].split(separator))
  }
  return res.filter(a => a !== '')
  
};
console.log(splitWordsBySeparator(["one.two.three", "four.five", "six"], "."))
console.log(splitWordsBySeparator(["$easy$", "$problem$"], "$"))
console.log(splitWordsBySeparator(["|||"], separator = "|"))
