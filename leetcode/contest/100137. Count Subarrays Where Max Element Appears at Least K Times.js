var countSubarrays = function (nums, k) {
  let max = Math.max(...nums)
  // console.log(max)
  let cnt = new Array(nums.length);
  // console.log(cnt)
  let m = 0;
  let j = 0;
  let map = new Map();
  for (let i of nums) {
    if (i === max) {
      m++;
      map.set(m, j);
    }
    cnt[j++] = m;
  }
  console.log(map)
  let ans = 0;
  j = 0;
  for (let i of cnt) {
    if (i >= k) {
      let last = map.get(i - k + 1) || i;
      ans += last + 1;
    }
    j++;
  }
  return ans;
};
console.log(countSubarrays([1, 3, 2, 3, 3], 2)) //6
console.log(countSubarrays([1, 4, 2, 1], 3)) //0
console.log(countSubarrays([28, 5, 58, 91, 24, 91, 53, 9, 48, 85, 16, 70, 91, 91, 47, 91, 61, 4, 54, 61, 49], 1)) //187
