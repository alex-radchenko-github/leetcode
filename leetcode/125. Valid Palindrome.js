var isPalindrome = function (s) {
  function check(c) {
    return /^[a-zA-Z0-9]*$/.test(c)
  }
  s = s.split("").filter((a) => check(a) === true).join('').toLowerCase()
  let l = 0
  let r = s.length - 1
  while (l<r){
    if(s[l]!==s[r]){
      return false
    }
    l++
    r--
  }
  return true

};
console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("A brown fox jumping over"))
