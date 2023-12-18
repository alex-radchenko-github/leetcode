var intersection = function(nums1, nums2) {
    nums1 = new Set(nums1)
    return nums2.filter(num => nums1.delete(num))
};

console.log(intersection([1,2,2,1], [2,2]))
console.log(intersection([4,9,5], [9,4,9,8,4]))

//
//
// var intersection = function(nums1, nums2) {
//     let res = []
//     let minArray =[]
//     let maxArray =[]
//
//     if (nums1.length >= nums2.length){
//         minArray = nums2
//         maxArray = nums1
//     } else {
//         minArray = nums1
//         maxArray = nums2
//     }
//     for (let i = 0; i < minArray.length; i++) {
//         if (maxArray.includes(minArray[i]) && !res.includes(minArray[i])){
//             res.push(minArray[i])
//
//         }
//
//     }
//     return res
//
// };
//
// console.log(intersection([1,2,2,1], [2,2]))
// console.log(intersection([4,9,5], [9,4,9,8,4]))
