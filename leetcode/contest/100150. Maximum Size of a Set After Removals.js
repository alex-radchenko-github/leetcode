var maximumSetSize = function (nums1, nums2) {
  let res = []
  let length = nums1.length
  let setNums1 = new Set(nums1)
  let setNums2 = new Set(nums2)
  if(setNums1.size<setNums2.size){
    [setNums1, setNums2] = [setNums2, setNums1]
  }
  let arr = Array.from(setNums1)
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
  
};
// console.log(maximumSetSize([1, 2, 1, 2], [1, 1, 1, 1])); // Output: 2
console.log(maximumSetSize([2, 3, 2, 3, 2, 3], [1, 2, 3, 4, 5, 6])); // Output: 5
// console.log(maximumSetSize([1, 2, 3, 4, 5, 6], [2, 3, 2, 3, 2, 3])); // Output: 5
// console.log(maximumSetSize([1, 1, 2, 2, 3, 3], [4, 4, 5, 5, 6, 6])); // Output: 6
//
