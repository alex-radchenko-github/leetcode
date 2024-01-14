var largestPerimeter = function (nums) {
  let summ = nums.reduce((a, b) => a + b)
  let aaa = nums.sort((a, b) => b - a)
  for (let i = 0; i < aaa.length - 2; i++) {
    if (aaa[i] < summ - aaa[i]) {
      return aaa[i] + (summ - aaa[i])
    }
    summ = summ - aaa[i]
  }
  return -1
};
console.log(largestPerimeter([5, 5, 5])) //15
console.log(largestPerimeter([1, 2, 3])) //-1
console.log(largestPerimeter([1, 12, 1, 2, 5, 50, 3])) //12

//[50, 12, 5, 3, 2,  1, 1]
