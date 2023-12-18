var isPowerOfFour = function (n) {
    if (n === 1) {
        return true
    } else if (n <= 0) {
        return false
    }
    return (n & (n - 1)) === 0 && (n % 10 === 4 || n % 10 === 6);

};

// var isPowerOfFour = function (num) {
//
//     if (num <= 0)
//         return false;
//     else if (num === 1)
//         return true;
//
//     return (num & (num - 1)) === 0 && (num % 10 === 4 || num % 10 === 6);
// };

// console.log(isPowerOfFour(16))
// console.log(isPowerOfFour(64))
console.log(isPowerOfFour(256))
console.log(isPowerOfFour(6))