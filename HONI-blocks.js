const honi = function (str) {
    let res = []
    let word = ['H', 'O', 'N', 'I']
    for (let i = 0; i < str.length; i++) {
        if (str[i] === word[0]) {
            res.push(word.shift())

            if (word.length === 0) {
                word = ['H', 'O', 'N', 'I']
            }
        }

    }
    return res.length/4
};

console.log(honi('PROHODNIHODNIK'))
console.log(honi('MAGNUS'))
console.log(honi('HHHHOOOONNNNIIII'))
console.log(honi('HNOIIONI'))
