var frequencySort = function (nums) {
    let res = []
    const dic = new Map();

    function mult(num, count) {
        let t = []
        for (let i = 0; i < count; i++) {
            t.push(num)
        }
        return t
    }

    for (let i = 0; i < nums.length; i++) {
        if (dic.get(nums[i]) === undefined) {
            dic.set(nums[i], 1)
        } else {
            dic.set(nums[i], dic.get(nums[i]) + 1)
        }
    }
    let aaa = Array.from(dic)
    aaa.sort((a, b) => (a[1] === b[1]) ? b[0] - a[0] : a[1] - b[1])

    for (let i = 0; i < aaa.length; i++) {
        res = [...res, ...mult(aaa[i][0], aaa[i][1])]
    }
    return res
};

console.log(frequencySort([1, 1, 2, 2, 2, 3]))
console.log(frequencySort([2, 3, 1, 3, 2]))
console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1]))