const memo = {};
let iterationCount = 0;
// function f(n) {
//   iterationCount++;
//   if (n <= 1) {
//     return n
//   } else {
//     return f(n - 1) + f(n - 2)
//   }
//
// }

function f(n) {
  iterationCount++;
  if (memo[n] !== undefined) {
    return memo[n];
  }

  if (n <= 1) {
    return n;
  } else {
    memo[n] = f(n - 1) + f(n - 2);
    return memo[n];
  }
}

// Example usage
const startTime = performance.now();
const result = f(30); // Calculate the 30th Fibonacci number
const endTime = performance.now();

console.log(`Result: ${result}`);
console.log(`Execution time: ${(endTime - startTime).toFixed(2)}
milliseconds`);
console.log(`Number of iterations: ${iterationCount}`,memo)




// console.log(f(25), `Number of iterations: ${iterationCount}`,memo)
