var restoreString = function (s, indices) {
    let tmp = []
    for (let i = 0; i < s.length; i++) {
        tmp.push([s[i], indices[i]])
    }

    return tmp.sort((a, b) => a[1] - b[1]).map(x =>x[0]).join('')

};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]))