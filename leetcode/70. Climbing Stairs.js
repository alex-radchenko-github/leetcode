var climbStairs = function (n) {
  if (n <= 1) {
    return 1
  } else{
    return climbStairs(n - 1) + climbStairs(n - 2)
  }
}
// console.log(climbStairs(1))
console.log(climbStairs(40))
// 1,2,3
