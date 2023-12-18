function f(n) {
  let [a, b] = [0, 1]
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, b + a]
  }
  return a+b
}

console.log(f(4))
