var findErrorNums = function (nums) {
  let n = nums.length
  let currSumm = new Array(new Set(nums)).reduce((a, b) => a + b)
  let resSumm = n*(n+1)/2
  console.log(resSumm)
};

console.log(findErrorNums([1, 2, 2, 4]))
console.log(findErrorNums([1, 1]))
console.log(findErrorNums([2, 2]))
console.log(findErrorNums([3, 2, 2]))
// console.log(findErrorNums([3, 2, 3, 4, 6, 5]))
