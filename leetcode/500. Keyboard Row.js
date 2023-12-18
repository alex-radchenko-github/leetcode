var findWords = function (words) {
  let rez = []
  let letterMap = {
    firstRow: "qwertyuiop",
    secondRow: "asdfghjkl",
    thirdRow: "zxcvbnm",
  }
  
  function findRow(letter) {
    let aaa = Array.from(Object.entries(letterMap)).find(([key, value]) => value.includes(letter) !== false)
    return aaa[0]
  }
  
  for (let i = 0; i < words.length; i++) {
    let rezArr = []
    for (let j = 0; j < words[i].length; j++) {
      rezArr.push(findRow(words[i].toLowerCase()[j]))
    }
    let set = new Set(rezArr)
    if(set.size === 1){
      rez.push(words[i])
    }
  }
  return rez
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]))
console.log(findWords(["omk"]))

