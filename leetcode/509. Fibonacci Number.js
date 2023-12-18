// var fib = function (n) {
//   let [a, b] = [0, 1]
//   for (let i = 0; i < n; i++) {
//     [a, b] = [b, a + b]
//   }
//   return a
// };
//
// console.log(fib(4))


var fibrecur = function (n) {
  if (n <= 1) {
    return n
  } else{
    return fibrecur(n - 1) + fibrecur(n - 1)
  }
};

console.log(fibrecur(25))
