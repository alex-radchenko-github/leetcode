/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let res = 1
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    for (let i = 0; i < columnTitle.length; i++) {
        console.log(alphabet.indexOf(columnTitle[i]))
        res += (alphabet.indexOf(columnTitle[i]) + 1)
    }

    return res
};

//5665590

// console.log(titleToNumber("Z"))//26
// console.log(titleToNumber("AA"))//27
// console.log(titleToNumber("AB"))//28
// console.log(titleToNumber('ZY'))//701
console.log(titleToNumber('FXSHRXW'))
