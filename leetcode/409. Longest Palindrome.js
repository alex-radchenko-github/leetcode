var longestPalindrome = function (s) {
    let res = 0
    let swNumOne = true
    let hashMap = new Map()
    for (let i = 0; i < s.length; i++) {
        if (!hashMap.has(s[i])) {
            hashMap.set(s[i], 1)
        } else {
            hashMap.set(s[i], hashMap.get(s[i]) + 1)
        }
    }
    let val = Array.from(hashMap.values())
    for (let i = 0; i < val.length; i++) {
        if ((val[i] === 1 || val[i] % 2 > 0) && swNumOne === true) {
            res += 1
            swNumOne = false
        }
        res += Math.floor(val[i] / 2) * 2
    }

    if (swNumOne === true && (res % 2) > 0) {
        return res + 1

    } else {
        return res
    }

};
console.log(longestPalindrome("abccccdd"))
console.log(longestPalindrome("ccc"))
console.log(longestPalindrome("bb"))