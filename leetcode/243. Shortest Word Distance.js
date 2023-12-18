//Given an array of strings wordsDict and two different strings that already exist in the array word1 and word2, return the shortest distance between these two words in the list.

/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function (wordsDict, word1, word2) {

    let res = []

    let word1Indexes = []
    let word2Indexes = []

    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] === word1) {
            word1Indexes.push(i)
        } else if (wordsDict[i] === word2) {
            word2Indexes.push(i)
        }
    }
    for (let i = 0; i < word1Indexes.length; i++) {
        for (let j = 0; j < word2Indexes.length; j++) {
            res.push(Math.abs(word1Indexes[i] - word2Indexes[j]))
        }
    }
    return Math.min(...res)
};
