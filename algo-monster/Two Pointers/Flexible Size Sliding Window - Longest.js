function subarraySumLongest(nums, target) {
  let windowSum = 0
  let length = 0;
  let left = 0;
  for (let right = 0; right < nums.length; ++right) {
    windowSum = windowSum + nums[right];
    while (windowSum > target) {
      windowSum = windowSum - nums[left];
      ++left;
    }
    length = Math.max(length, right - left + 1);
  }
  return length;
}


console.log(subarraySumLongest([1, 6, 3, 1, 2, 4, 5], 10))
