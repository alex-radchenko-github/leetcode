var arrayPairSum = function (nums) {
  let rez = 0
  let sort = nums.sort((a, b) => a - b)
  for (let i = 0; i < sort.length; i++) {
    if (i % 2 === 0) {
      rez += sort[i]
    }
  }
  return rez
};

console.log(arrayPairSum([1, 4, 3, 2]))
console.log(arrayPairSum([6, 2, 6, 5, 1, 2]))

