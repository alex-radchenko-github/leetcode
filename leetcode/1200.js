var minimumAbsDifference = function (arr) {
    arr.sort((a, b) => a - b)
    let min = Infinity
    let res = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (Math.abs(arr[i] - arr[i+1]) < min) {
            res = []
            min = Math.abs(arr[i] - arr[i+1])
            res.push([arr[i],arr[i+1]])
        } else if (Math.abs(arr[i] - arr[i+1]) === min){
            res.push([arr[i],arr[i+1]])

        }
    }
    return res

};
// console.log(minimumAbsDifference([4, 2, 1, 3]))
// console.log(minimumAbsDifference([1, 3, 6, 10, 15]))
console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]))