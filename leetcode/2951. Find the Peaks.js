var findPeaks = function (mountain) {
  let pointerl = 0
  let pointerR = 0
  
  for (let i = 1; i < mountain.length - 1; i++) {
    if (mountain[i] < mountain[i - 1]) {
      pointerl = i
    }
  }
  console.log([pointerl, pointerR])
};
console.log(findPeaks([1, 4, 3, 8, 5]))
