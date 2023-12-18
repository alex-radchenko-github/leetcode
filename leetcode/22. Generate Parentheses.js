var generateParenthesis = function (n) {
    let ans = []
    const backtrack = function (S = [], left = 0, right = 0) {
        ans.push(S.join(""))
        // if (S.length === 2 * n) {
        //     ans.push(S.join(""))
        //
        // }
        if (left < n) {
            S.push("(")
            backtrack(S, left + 1, right)
            S.pop()
        }
        if (right < left) {
            S.push(")")
            backtrack(S, left, right + 1)
            S.pop()
        }

    };
    backtrack()
    return ans

};
console.log(generateParenthesis(2))