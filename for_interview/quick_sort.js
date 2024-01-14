let count = 0
function quickSort(arr) {
    if (arr.length < 1) {
        return arr
    }
    let midIndex = Math.floor(arr.length / 2)
    let mid = arr[midIndex]
    let less = []
    let more = []


    for (let i = 0; i < arr.length; i++) {
        if (i === midIndex) {
            continue
        }
        if (arr[i] < mid) {
            less.push(arr[i])
        } else {
            more.push(arr[i])
        }
    }

    return [...quickSort(less), mid, ...quickSort(more)]
    
}

console.log(quickSort([-1000, 23, 4, 3, 2, 3, 4, 5, 44, 5, 4, 2, 34, 6, 7, 88, 8, 4, 32, 1, 3, 4, 54, 3, 2, -99]))

console.log(count)
