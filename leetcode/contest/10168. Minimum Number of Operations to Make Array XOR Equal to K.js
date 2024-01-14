var minOperations = function(nums, k) {
  let xorSum = 0;
  
  for (let num of nums) {
    xorSum ^= num;
  }
  
  let count = 0;
  for (let xor = xorSum ^ k; xor > 0; xor >>= 1) {
    count += xor & 1;
  }
  
  return count;
};
console.log(minOperations([2,1,3,4],1))
console.log(minOperations([2,0,2,0],0))
