var isPalindrome = function (x) {
    let orig = x.toString()
    let rev = orig.split("").reverse().join("")
    return orig === rev
};

console.log(isPalindrome(121))
