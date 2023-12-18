var longestNiceSubarray = function (nums) {
    let res = []
    let windowSize = 3
    for (let i = 0; i < nums.length + 1 - windowSize; i++) {
        // console.log(nums.slice(i, windowSize + i)
    }
    let checkNiceSubarray = function (subarray) {
        let subarrayRes = []
        let tempSubarray = []
        for (let i = 0; i < subarray.length; i++) {
            tempSubarray.push(subarray[i])
            for (let j = 1; j < tempSubarray.length; j++) {
                if ((tempSubarray[j - 1] & tempSubarray[tempSubarray.length - 1]) !== 0) {
                    break
                } else if ((tempSubarray[j - 1] & tempSubarray[tempSubarray.length - 1]) === 0) {
                    continue
                }
                res.push(tempSubarray.length)
            }

        }
    }
    console.log(checkNiceSubarray(nums.slice(0, 5)))
    return res

}


console.log(longestNiceSubarray([1, 3, 8, 48, 10]))
// console.log(longestNiceSubarray([744437702, 379056602, 145555074, 392756761, 560864007, 934981918, 113312475, 1090, 16384, 33, 217313281, 117883195, 978927664]))