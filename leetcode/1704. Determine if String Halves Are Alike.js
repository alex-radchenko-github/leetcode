var halvesAreAlike = function (s) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  function countVowels(text) {
    let res = 0
    for (let i = 0; i < text.length; i++) {
      if(vowels.includes(text[i].toLowerCase())){
        res++
      }
    }
    return res
  }
  let left = s.slice(0, s.length / 2)
  let right = s.slice((s.length / 2) , s.length)
  return countVowels(left)=== countVowels(right)
};
console.log(halvesAreAlike("book"))
console.log(halvesAreAlike("textbook"))
