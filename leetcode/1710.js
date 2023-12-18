var maximumUnits = function (boxTypes, truckSize) {
    let res = 0
    boxTypes.sort((a, b) => a[1] - b[1]).reverse();
    for (let i = 0; i < boxTypes.length; i++) {
        if (boxTypes[i][0] < truckSize) {
            res += (boxTypes[i][0] * boxTypes[i][1])
            truckSize -= boxTypes[i][0]
        } else if(boxTypes[i][0] === truckSize){
            res += (boxTypes[i][0] * boxTypes[i][1])
            break
        } else if (boxTypes[i][0] > truckSize){
            res += (truckSize * boxTypes[i][1])
            break
        }
    }
    return res
};

console.log(maximumUnits([[5, 10], [2, 5], [4, 7], [3, 9]], 10))

//[5,10],[2,5],[4,7],[3,9] - 91/10
// [5,10] = 50
// [3,9] = 27
// /[2,7] = 14