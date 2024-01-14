function numberOfPowerfulInt(start, finish, limit, s) {
  let count = 0;
  let suffix = parseInt(s, 10);
  let suffixLength = s.length;
  let minValue = Math.pow(10, suffixLength - 1);
  
  if (suffix < minValue || suffix > finish) {
    return 0; // suffix itself is not in the range
  }
  
  // Find the starting point
  let startPrefix = Math.floor(start / Math.pow(10, suffixLength));
  let endPrefix = Math.floor(finish / Math.pow(10, suffixLength));
  
  for (let prefix = startPrefix; prefix <= endPrefix; prefix++) {
    if (isValidPrefix(prefix, limit)) {
      let number = parseInt(prefix + s, 10);
      if (number >= start && number <= finish) {
        count++;
      }
    }
  }
  
  return count;
}

function isValidPrefix(prefix, limit) {
  if (prefix === 0) return true; // empty prefix is valid
  
  while (prefix > 0) {
    if (prefix % 10 > limit) return false;
    prefix = Math.floor(prefix / 10);
  }
  
  return true;
}


console.log(numberOfPowerfulInt(start = 1, finish = 6000, limit = 4, s = "124"))
console.log(numberOfPowerfulInt(start = 15, finish = 215, limit = 6, s = "10"
))
console.log(numberOfPowerfulInt(start = 1000, finish = 2000, limit = 4, s = "3000"))
console.log(numberOfPowerfulInt(1829505, 1255574165, 7, "11223"))

