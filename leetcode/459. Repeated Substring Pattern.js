var repeatedSubstringPattern = function (s) {
    if (s.length < 2) {
        return false
    }
    console.log(s.length / 2)


};

console.log(repeatedSubstringPattern("abab"))
console.log(repeatedSubstringPattern("aba"))
console.log(repeatedSubstringPattern("abc abc abc abc"))
console.log(repeatedSubstringPattern("ababab"))// true