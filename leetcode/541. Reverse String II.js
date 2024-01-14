var reverseStr = function (s, k) {
  for (let i = 0; i < s.length; i+=k*2) {
    console.log(s[i])
  }
};
console.log(reverseStr("abcdefg", 2)) //bacdfeg
console.log(reverseStr("abcd"), 2) //bacd
