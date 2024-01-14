var halvesAreAlike = function (s) {
  return Array.from(s.slice(0, s.length / 2)).filter(a => ['a', 'e', 'i', 'o', 'u'].includes(a.toLowerCase())).length === Array.from(s.slice(s.length / 2, s.length)).filter(a => ['a', 'e', 'i', 'o', 'u'].includes(a.toLowerCase())).length
};


// var halvesAreAlike = function (s) {
//   let vowels = new Set(['a', 'e', 'i', 'o', 'u'])
//   let res = 0
//   let mid = (s.length / 2)
//   for (let i = 0; i < s.length; i++) {
//     if (i < mid && vowels.has(s[i].toLowerCase())) {
//       res++
//     } else if (i >= mid && vowels.has(s[i].toLowerCase())) {
//       res--
//     }
//   }
//   return res === 0
// };
console.log(halvesAreAlike("book"))
console.log(halvesAreAlike("textbook"))
console.log(halvesAreAlike("Uo"))
console.log(halvesAreAlike("AbCdEfGh"))


// var halvesAreAlike = function (s) {
//   let vowels = new Set(['a', 'e', 'i', 'o', 'u'])
//   let left = s.slice(0,s.length/2)
//   let right = s.slice(s.length/2,s.length)
//   left = Array.from(left).filter(a => vowels.has(a.toLowerCase()))
//   right = Array.from(right).filter(a => vowels.has(a.toLowerCase()))
//   return left.length === right.length
// };
// console.log(halvesAreAlike("book"))
// console.log(halvesAreAlike("textbook"))
