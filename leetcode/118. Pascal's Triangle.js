var generate = function (numRows) {
    let res = [[1]]
    let countRow = numRows - 1

    while (countRow > 0) {
        let tempRes = [1]
        let lastArr = res[res.length - 1]
        for (let i = 0; i < lastArr.length - 1; i++) {
            tempRes.push(lastArr[i] + lastArr[i + 1])
        }
        tempRes.push(1)
        res.push(tempRes)
        countRow -= 1
    }
    return res

};
console.log(generate(6))