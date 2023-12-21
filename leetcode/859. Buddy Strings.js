var buddyStrings = function (s, goal) {
  let diff = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      diff.push([s[i], goal[i]])
    }
  }
  console.log(diff)
  // if(s.length !== goal.length || s.length < 2){
  //   return false
  // }
  // if(s === goal){
  //   let set = new Set(s)
  //   if(s.length - set.size >= 1){
  //     return true
  //   } else{
  //     return false
  //   }
  // }
  //
  // let count = 0
  // for (let i = 0; i < s.length; i++) {
  //   if (s[i] !== goal[i]) {
  //     count++
  //   }
  // }
  // return count === 0 || count > 2 ? false : true
};
console.log(buddyStrings("aabf", "aabf"))
console.log(buddyStrings("ab", "ab"))
console.log(buddyStrings("ab", "ba"))
console.log(buddyStrings("abgf", "bagf"))
console.log(buddyStrings("abgfa", "bagfm"))
console.log(buddyStrings("aa", "bb"))
console.log(buddyStrings("abcaa", "abcbb"))

