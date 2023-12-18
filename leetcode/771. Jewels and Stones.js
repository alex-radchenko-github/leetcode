/* A function that takes two parameters, jewels and stones. */
/* A function that takes two parameters, jewels and stones. */
var numJewelsInStones = function (jewels, stones) {
    let res = 0
    for (let i = 0; i < stones.length; i++) {
        if (jewels.includes(stones[i]) === true) {
            res += 1
        }
    }
    return res
};

console.log(numJewelsInStones("aA", "aAAbbbb"))