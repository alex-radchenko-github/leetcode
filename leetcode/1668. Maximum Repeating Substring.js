var maxRepeating = function (sequence, word) {
  let res = 0
  for (let i = 1; i < Math.floor(sequence.length / word.length) + 1; i++) {
    if (sequence.includes(word.repeat(i))) {
      res = Math.max(res, i)
    } else {
      break
    }
  }
  return res
};
console.log(maxRepeating("ababc", "ab"))
console.log(maxRepeating("ababc", "ba"))
console.log(maxRepeating("ababc", "ac"))
