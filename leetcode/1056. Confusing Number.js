var confusingNumber = function (n) {
    let invalidNums = ['2', '3', '4', '5', '7']
    let confusingNums = {
        0: 0,
        1: 1,
        6: 9,
        8: 8,
        9: 6
    }
    let tempArr = n.toString().split("")
    for (let i = 0; i < tempArr.length; i++) {
        if (invalidNums.includes(tempArr[i])) {
            return false
        } else {
            tempArr[i] = confusingNums[tempArr[i]]
        }
    }
    return tempArr.reverse().join("") !== n.toString()
};
console.log(confusingNumber(6))
console.log(confusingNumber(89))
console.log(confusingNumber(11))
console.log(confusingNumber(5))