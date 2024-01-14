var numberGame = function(nums) {
  nums = nums.sort((a,b) => a-b)
  let res = []
  
  for (let i = 0; i < nums.length; i+=2) {
    res.push(nums[i+1])
    res.push(nums[i])
  }
  return res

};
//[5,4]
// [3,2,5,4]
console.log(numberGame([5,4,2,3]))
console.log(numberGame([2,5]))
