var findIntersectionValues = function (nums1, nums2) {
  let rez = [0, 0]
  let nums1Set = new Set(nums1)
  let nums2set = new Set(nums2)
  for (let i = 0; i < nums1.length; i++) {
    if (nums2set.has(nums1[i])) {
      rez[0]++
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (nums1Set.has(nums2[i])) {
      rez[1]++
    }
  }
  return rez;
}

console.log(findIntersectionValues([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6]))
// console.log(findIntersectionValues([3,4,2,3], [1,5]))

