var isStrobogrammatic = function (num) {
    let dic = {6: 9, 9: 6, 8: 8}
    let numArr = num.split('')
    for (let i = 0; i < numArr.length; i++) {
        if (!(numArr[i] in dic)) {
            return false
        } else {
            numArr[i] = dic[numArr[i]]
        }
    }
    return numArr.reverse().join("") === num
};

console.log(isStrobogrammatic("69"))
console.log(isStrobogrammatic("88"))
console.log(isStrobogrammatic("266"))