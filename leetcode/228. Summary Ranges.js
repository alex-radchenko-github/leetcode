var summaryRanges = function (nums) {
    let res = []
    let startRange = nums[0]

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 === nums[i + 1] && nums[i + 1] !== nums[nums.length]) {
            continue
        } else {
            if (startRange !== nums[i]) {
                res.push(`${startRange}->${nums[i]}`)
            } else {
                res.push(`${nums[i]}`)
            }

            startRange = nums[i + 1]
        }

    }
    return res

};
console.log(summaryRanges([0, 1, 2, 4, 5, 7]))//["0->2","4->5","7"]
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]))//["0","2->4","6","8->9"]