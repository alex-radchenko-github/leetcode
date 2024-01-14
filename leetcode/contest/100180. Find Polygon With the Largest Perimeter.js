var largestPerimeter = function (nums) {
  let Sum = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    Sum += nums[i];
  }
  nums.sort((a, b) => a - b);
  
  for (let i = nums.length - 1; i > 1; i--) {
    Sum -= nums[i];
    if (nums[i] < Sum) {
      return Sum + nums[i];
    }
  }
  return -1;
}

console.log(largestPerimeter([1, 12, 1, 2, 5, 50, 3]))
console.log(largestPerimeter([5, 5, 50]))
