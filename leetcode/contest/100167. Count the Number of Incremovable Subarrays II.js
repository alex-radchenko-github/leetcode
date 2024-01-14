function incremovableSubarrayCount(nums) {
  const n = nums.length;
  let l = [];
  let r = [];
  let cur = -Infinity;
  console.log(l)
  for (let i = 0; i < n; i++) {
    if (nums[i] > cur) {
      l.push(nums[i]);
    } else {
      break;
    }
    cur = nums[i];
  }
  
  cur = Infinity;
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] < cur) {
      r.push(nums[i]);
    } else {
      break;
    }
    cur = nums[i];
  }
  r.reverse();
  
  if (l.length === n) {
    return n * (n + 1) / 2;
  }
  
  let ret = r.length + 1;
  for (let x of l) {
    let idx = binarySearchLeft(r, x + 1);
    ret += r.length - idx + 1;
  }
  return ret;
}

function binarySearchLeft(arr, target) {
  let low = 0;
  let high = arr.length;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}
// console.log(incremovableSubarrayCount([1,2,3,4]))
console.log(incremovableSubarrayCount([6,5,7,8]))
// console.log(incremovableSubarrayCount([8,7,6,6]))
