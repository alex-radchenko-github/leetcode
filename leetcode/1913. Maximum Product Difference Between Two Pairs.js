/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
    let sortedList = nums.sort((a, b) => a - b)
    return (sortedList[sortedList.length - 1] * sortedList[sortedList.length - 2]) - (sortedList[0] * sortedList[1])
};
console.log(maxProductDifference([5, 6, 2, 7, 4]))//34