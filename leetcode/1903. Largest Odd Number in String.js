var largestOddNumber = function (num) {
  let rez = []
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0) {
      rez.push(i)
    }
  }
  return rez.length === 0? '': num.slice(0, rez[rez.length - 1] + 1)
};


// console.log(largestOddNumber("52"))
// console.log(largestOddNumber("4206"))
console.log(largestOddNumber("35427"))



