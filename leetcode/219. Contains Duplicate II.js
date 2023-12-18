var containsNearbyDuplicate = function (nums, k) {
    if (nums.length === k) {
        k -= 1
    } else if (k > nums.length) {
        k = nums.length - 1
    }
    console.log(k)

    let res = false
    for (let i = 0; i < nums.length - k; i++) {
        let slice = nums.slice(i, i + k + 1)
        let set = new Set(slice)
        if (set.size !== slice.length) {
            res = true
            break
        }
    }
    return res
};
// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
// console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))
// console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))
console.log(containsNearbyDuplicate([99, 99], 2))
console.log(containsNearbyDuplicate([2, 2], 3))


// var containsNearbyDuplicate = function (nums, k) {
//     let hashSet = new Set()
//     for (let i = 0; i < nums.length; i++) {
//         if (hashSet.has(nums[i])) {
//             return true
//         }
//         hashSet.add(nums[i])
//         if (hashSet.size > k) {
//             hashSet.delete(nums[i - k])
//         }
//     }
//     return false
// };
// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
// console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))
// console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))
