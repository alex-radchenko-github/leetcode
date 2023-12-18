var shuffle = function (nums, n) {
  let rez = []
  for (let i = 0; i < n; i++) {
    rez.push(nums[i])
    rez.push(nums[i + n])
  }
  return rez
};
console.log(shuffle([2, 5, 1, 3, 4, 7], 3))
