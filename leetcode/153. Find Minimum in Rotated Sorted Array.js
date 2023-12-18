var findMin = function (nums) {
  if (nums.length === 1) {
    return nums[0]
  }
  
  let [left, right] = [0, nums.length - 1]
  let res = Number
  while (right > left) {
    if (nums[right] > nums[left]) {
      return nums[left]
    } else {
      left++
    }
  }
  return nums[nums.length - 1]
};
console.log(findMin([3, 2, 1]))
console.log(findMin([3, 4, 5, 1, 2]))
console.log(findMin([5, 1, 2, 3, 4]))
console.log(findMin([4, 5, 6, 7, 0, 1, 2]))
console.log(findMin([11, 13, 15, 17]))
