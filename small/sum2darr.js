function sum2darr(arr) {
    let res = []
    for (let i = 0; i <arr.length ; i++) {
        (arr[i].length <1)? res.push(0):res.push(arr[i].reduce(function (a,b) {return a+b}))
    }
    return res
}

console.log(sum2darr([[], [2, 2], [0]]))