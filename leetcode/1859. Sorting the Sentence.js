var sortSentence = function(s) {
  return s.split(" ").sort((a,b)=> a[a.length-1]-b[b.length-1]).map(string => string.slice(0, -1)).join(" ")
};
console.log(sortSentence("is2 sentence4 This1 a3"))
