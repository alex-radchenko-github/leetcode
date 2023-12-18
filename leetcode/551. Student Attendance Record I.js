var checkRecord = function (s) {
    if (s.includes("LLL") === true) {
        return false
    }
    return s.split("A").length - 1 < 2
};

console.log(checkRecord("PPALL"))
