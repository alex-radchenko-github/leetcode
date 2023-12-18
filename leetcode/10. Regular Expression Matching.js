var isMatch = function (s, p) {
    let first = !!s && (p[0] === s[0] || p[0] === '.')

    console.log(first)

};
console.log(isMatch("aa", "a"))
console.log(isMatch("aa", "a*"))
console.log(isMatch("ab", ".*"))