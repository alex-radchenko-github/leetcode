var wordPattern = function (pattern, s) {
    let map1 = new Map();
    let map2 = new Map();
    pattern = pattern.split("")
    s = s.split(" ")
    if (pattern.length !== s.length)
        return false

    for (let i = 0; i < pattern.length; i++) {
        if (!(pattern[i] in map1)) {
            map1.set(pattern[i], s[i])
        }
        if (!(s[i] in map2)) {
            map2.set(s[i], pattern[i])
        }
    }

    if (map2.size >= map1.size) {
        for (let i = 0; i < pattern.length; i++) {
            if (!(map1.get(pattern[i]) === s[i])) {
                return false
            }
        }

    } else {
        for (let i = 0; i < pattern.length; i++) {

            if (!(map2.get(s[i]) === pattern[i])) {
                return false
            }
        }
    }
    return true
};
// console.log(wordPattern("abba", "dog cat cat dog"))
// console.log(wordPattern("abba", "dog cat cat fish"))
// console.log(wordPattern("aaaa", "dog cat cat dog"))
// console.log(wordPattern("aaaa", "dog dog dog dog"))
console.log(wordPattern("abba", "dog dog dog dog"))