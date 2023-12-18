var isPowerOfTwo = function (n) {
    if (n === 1) {
        return true
    } else {
        let n1 = 2
        let power = 1
        while (n1 !== n && n1 < n) {
            n1 = Math.pow(2, power)
            power += 1
        }
        return n1 === n
    }
};

console.log(isPowerOfTwo(6))
console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(17))
console.log(isPowerOfTwo(32))
console.log(isPowerOfTwo(64))
console.log(isPowerOfTwo(8192))
console.log(isPowerOfTwo(16384))
