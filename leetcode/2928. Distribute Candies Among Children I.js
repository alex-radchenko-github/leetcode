function distributeCandies(n, limit) {
  let totalCount = 0;
  
  for (let i = 0; i <= Math.min(n, limit); i++) {
    // Calculate the valid range for the second child
    let lowerBound = Math.max(0, n - i - limit);
    let upperBound = Math.min(limit, n - i);
    console.log(lowerBound, upperBound)
    
    // Count the number of valid distributions for this value of i
    totalCount += Math.max(upperBound - lowerBound + 1, 0);
    console.log(totalCount)
  }
  
  return totalCount;
}

// (0,0,0)
// Example usage
// console.log(distributeCandies(5, 2))
console.log(distributeCandies(3, 3))
