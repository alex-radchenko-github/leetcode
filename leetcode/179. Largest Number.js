var largestNumber = function (nums) {
    return nums.length === 1 ? nums[0].toString() : BigInt(nums.sort((a, b) => (a.toString() + b.toString()) - (b.toString() + a.toString())).reverse().join('')).toString()
};

console.log(largestNumber([10, 2]))//210
console.log(largestNumber([3, 30, 34, 5, 9]))//9534330
console.log(largestNumber([3, 30, 34]))//34330
console.log(largestNumber([0, 0]))//34330
console.log(largestNumber([0, 0, 0]))//34330
console.log(largestNumber([0]))//34330