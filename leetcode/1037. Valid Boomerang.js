var isBoomerang = function (points) {

    console.log(points[2][0] - points[0][0])
    console.log(points[2][1] - points[0][1])
    let temp1 = []

    for (let i = 0; i < points.length; i++) {
        temp1.push(JSON.stringify(points[i]))
    }
    let temp = new Set(temp1)
    if (temp.size !== 3) {
        return false
    } else {
        if (points[2][0] - points[0][0] === points[1][0] && points[2][1] - points[0][1] === points[1][1]) {
            return false
        } else {
            return true
        }
    }
};

// console.log(isBoomerang([[1, 1], [2, 3], [3, 2]]))
// console.log(isBoomerang([[1, 1], [2, 2], [3, 3]]))
// console.log(isBoomerang([[0, 1], [0, 1], [2, 1]]))
console.log(isBoomerang([[0, 1], [1, 0], [1, 1]]))


// 0	1
// 1	1
// 2	1
// 1 - 1 * 1 - 0
