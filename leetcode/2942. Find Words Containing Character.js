var findWordsContaining = function (words, x) {
  let rez = []
  for (let i = 0; i < words.length; i++) {
    console.log(Array.from(words[i].matchAll('a')))
    // console.log(words[i].search('d'))
    // console.log(words[i].includes('d'))
    // console.log(words[i].indexOf('b', 1))
    
    // if(words[i].includes(x)){
    if (words[i].indexOf(x) !== -1) {
      rez.push(i)
    }
  }
  // return rez
};

console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], 'a'))
