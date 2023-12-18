var maxProduct = function (nums) {
    let newNums = nums.sort((a, b) => b - a)
    return (newNums[0] - 1) * (newNums[1] - 1)
};

console.log(maxProduct([3, 4, 5, 2]))
console.log(maxProduct([1, 5, 4, 5]))
