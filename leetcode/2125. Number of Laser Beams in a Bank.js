var numberOfBeams = function (bank) {
  let res = 0
  let row = []
  for (const bankElement of bank) {
    let countL = 0
    for (const bankElementElement of bankElement) {
      if (bankElementElement === '1') {
        countL++
      }
    }
    if (countL !== 0) {
      row.push(countL)
    }
  }
  for (let i = 0; i < row.length - 1; i++) {
    res = res+ (row[i] * row[i + 1])
  }
  return res
};

// console.log(numberOfBeams(["011001", "000000", "010100", "001000"]))
console.log(numberOfBeams(["000","111","000"]))
// "011001"
// "000000"
// "010100"
// "001000"
