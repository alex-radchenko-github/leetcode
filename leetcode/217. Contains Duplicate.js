// // var containsDuplicate = function (nums) {
// //     return new Set(nums).size !== nums.length
// //
// // };
// // console.log(containsDuplicate([1, 2, 3, 1]))
// // console.log(containsDuplicate([1, 2, 3, 4]))
// // console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
//
// var containsDuplicate = function (nums) {
//     let res = false
//     let setFromArr = new Set()
//
//     for (let i = 0; i < nums.length; i++) {
//         if (!setFromArr.has(nums[i])) {
//             setFromArr.add(nums[i])
//         } else {
//             res = true
//             break
//         }
//     }
//     return res
// };
//
// console.log(containsDuplicate([1, 2, 3, 1]))
// console.log(containsDuplicate([1, 2, 3, 4]))
// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))


var containsDuplicate = function (nums) {
  return new Set(nums).size === nums.length
};

console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))
