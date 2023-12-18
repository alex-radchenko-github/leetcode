var lengthOfLongestSubstring = function (s) {

    let res = 0
    let left = 0
    let hashMap = new Map()

    for (let i = 0; i < s.length; i++) {
        if (!hashMap.has(s[i])) {
            hashMap.set(s[i], i)
        } else {
            res = Math.max(res, (i - hashMap.get(s[i])))

            left += 1
            hashMap.set(s[i], i)
        }
    }
    return res

};

// console.log(lengthOfLongestSubstring("abcabcbb")) //?.
// console.log(lengthOfLongestSubstring("bbbbb")) //?.
// console.log(lengthOfLongestSubstring("pwwkew")) //?.
console.log(lengthOfLongestSubstring("au")) //?.