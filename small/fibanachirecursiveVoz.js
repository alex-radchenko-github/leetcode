function f(n, depth = 0) {
  console.log(' '.repeat(depth * 2) + `f(${n})`);
  
  if (n <= 1) {
    return n;
  }
  
  return f(n - 1, depth + 1) + f(n - 2, depth + 1);
}

f(5);
