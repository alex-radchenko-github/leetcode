var largestPalindromic = function (nums) {
    let res = ""
    let switcherOneChar = false
    let oneChar = 0

    let hashMap = new Map()
    for (const i in nums) {
        if (!hashMap.has(nums[i])) {
            hashMap.set(nums[i], 1)
        } else {
            hashMap.set(nums[i], hashMap.get(nums[i]) + 1)
        }
    }
    let tempArr = Array.from(hashMap).sort((a, b) => a[0] - b[0]).reverse()
    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i][1] === 1 || (tempArr[i][1] % 2 === 1)) {
            oneChar = Math.max(oneChar, tempArr[i][0])
            switcherOneChar = true
        }
        res += tempArr[i][0].repeat(tempArr[i][1] / 2)
    }

    if (res[0] === "0") {
        return oneChar.toString()
    }
    if (switcherOneChar) {
        return `${res}${oneChar}${res.split("").reverse().join("")}`
    }
    return `${res}${res.split("").reverse().join("")}`

};

console.log(largestPalindromic("00009"))//0
console.log(largestPalindromic("00009999"))//0