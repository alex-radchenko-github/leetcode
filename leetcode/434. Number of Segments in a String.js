var countSegments = function (s) {
    return s.split(" ").filter(a => a !== "").length

};
//!@#$%^&*()_+-=',.:

console.log(countSegments("Hello, my: name is John"))
// console.log(countSegments("love live! mu'sic forever"))
// console.log(countSegments(" "))
// console.log(countSegments(", , , ,        a, eaefa"))