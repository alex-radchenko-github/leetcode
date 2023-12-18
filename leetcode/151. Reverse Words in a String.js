var reverseWords = function (s) {
    return s.trim().split(/ +/).reverse().join(' ')

};

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));