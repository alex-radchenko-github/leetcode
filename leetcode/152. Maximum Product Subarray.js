var maxProduct = function(nums) {
  if (nums.length === 0) return 0;
  
  let maxProd = nums[0];
  let minProd = nums[0];
  let result = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      let temp = maxProd;
      maxProd = minProd;
      minProd = temp;
    }
    
    maxProd = Math.max(nums[i], maxProd * nums[i]);
    minProd = Math.min(nums[i], minProd * nums[i]);
    
    result = Math.max(result, maxProd);
  }
  
  return result;
};

console.log(maxProduct([2,3,-2,4]))
