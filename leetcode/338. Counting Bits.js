var countBits = function (n) {
    res = []
    for (let i = 0; i <= n; i++) {
        console.log(i)
        let bitNum = (i >>> 0).toString(2).split("1").length - 1
        res.push(bitNum)
    }
    return res

};
console.log(countBits(5))
