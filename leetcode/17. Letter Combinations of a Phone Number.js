var letterCombinations = function (digits) {
    let level = digits.toString().split("").length
    let letters = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }
    console.log(level)
// a   b   c
//def def def

};
console.log(letterCombinations(23))