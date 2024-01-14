var hasTrailingZeros = function(nums) {
  let countZ = 0;
  
  for (let num of nums) {
    if ((num & 1) === 0) {
      countZ++;
    }
    if (countZ >= 2) {
      return true;
    }
  }
  
  return false;

};
console.log(hasTrailingZeros([1,2,3,4,5]))
console.log(hasTrailingZeros([2,4,8,16]))
console.log(hasTrailingZeros([1,3,5,7,9]))
