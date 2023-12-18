var countBinarySubstrings = function (s) {
    let res = 0
    let res_temp = []
    let count = 1
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            count += 1
        } else if (s[i] === s[i + 1] && i+1 === s.length) {
            count += 1
            res_temp.push(count)
            count = 1

        } else {
            res_temp.push(count)
            count = 1
        }

    }
    res_temp.push(count)
    for (let i = 1; i < res_temp.length; i++) {
        res += (Math.min(res_temp[i], res_temp[i-1]))

    }

    return res

};
console.log(countBinarySubstrings('110101'))
// console.log(countBinarySubstrings('000110011'))
// 001100011
/// 000111
//    [2,2,2,2]

// 10101
// [1,1,1,1,1]
//0011, 01, 1100, 10, 0011, 01
// 1 - +1
// 0 - -1
//[ '0', '0', '1', '1' ] 0,
//[ '1', '1', '0', '0' ] +0
