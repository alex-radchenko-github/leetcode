var isSubsequence = function (s, t) {
    let i = 0
    let j = 0
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i += 1
        }
        j += 1

    }
    return i === s.length

};
console.log(isSubsequence("abc", "abbadc"))

// var isSubsequence = function (s, t) {
//     let lastIndex = 0
//     for (let i = 0; i < s.length; i++) {
//         lastIndex = t.indexOf(s[i])
//         if (lastIndex === -1) {
//             return false
//         }
//         t = t.slice(lastIndex + 1)
//
//     }
//     return true
// };

// console.log(isSubsequence("abc", "ahbgdc"))
// console.log(isSubsequence("axc", "ahbgdc"))
// console.log(isSubsequence("a", "b"))
// console.log(isSubsequence("a", "a"))
console.log(isSubsequence("aaaaaa", "bbaaaa"))
// console.log(isSubsequence("aec", "abcde"))