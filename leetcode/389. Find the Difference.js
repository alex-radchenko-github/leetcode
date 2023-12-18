var findTheDifference = function (s, t) {
    let xor = t.charCodeAt(t.length - 1)
    for (let i = 0; i < s.length; i++) {
        xor ^= s.charCodeAt(i)
        xor ^= t.charCodeAt(i)
    }
    return String.fromCharCode(xor)
};

console.log(findTheDifference("abcd", "abcde"))