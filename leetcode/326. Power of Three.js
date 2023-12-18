var isPowerOfThree = function (n) {
    if (n === 0 || n === 2) {
        return false
    } else if (n === 1) {
        return true
    } else {
        let n1 = 3
        let power = 1
        while (n1 !== n && n1 < n) {
            n1 = Math.pow(3, power)
            power += 1
        }
        return n1 === n
    }
};
