//575. Distribute Candies
var distributeCandies = function (candyType) {
    let countCandy = new Set(candyType).size
    let maxCandy = candyType.length / 2
    return countCandy >= maxCandy ? maxCandy : countCandy
};

console.log(distributeCandies([1, 1, 2, 2, 3, 3]))
console.log(distributeCandies([1, 1, 2, 3]))
console.log(distributeCandies([6, 6, 6, 6]))
