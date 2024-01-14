var threeSum = function (nums) {
  function twoSum(nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
      if (map.has(target - nums[i])) {
        return [map.get(target - nums[i]), i]
      } else {
        map.set(nums[i], i)
      }
    }
  }
  
  for (let i = 0; i < nums.length; i++) {
    let sliceL = nums.slice(0,i)
    let slicer = nums.slice(i+1, nums[-1])
    let slice = [...sliceL, ...slicer]
    let ii = (twoSum(slice, nums[i]))
    console.log(i, nums[ii[0]],nums[ii[1]])
  }
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
// console.log(threeSum([0, 1, 1]))
// console.log(threeSum([0, 0, 0]))
