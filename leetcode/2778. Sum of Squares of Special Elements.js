var sumOddLengthSubarrays = function (arr) {
  let res = 0
  let length = arr.length
  let aaa = Array.from({length: length}, (_, i) => i + 1)
  aaa = aaa.filter(num => num % 2 > 0)
  for (const num of aaa) {
    
  }
  // console.log(arr.reduce((a,b) => a+b))
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]))
