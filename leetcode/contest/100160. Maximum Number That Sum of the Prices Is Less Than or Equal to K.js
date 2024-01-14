function findMaximumNumber(k, x) {
  let sum = 0;
  let num = 0;
  let blockSize = 1 << x; // Block size is 2^x
  
  while (sum + calculateBlockPrice(num, blockSize, x) <= k) {
    sum += calculateBlockPrice(num, blockSize, x);
    num += blockSize;
  }
  
  // Check last few numbers in the block if we overshoot k
  for (let i = 0; i < blockSize; i++) {
    let price = calculatePrice(num, x);
    if (sum + price > k) {
      break;
    }
    sum += price;
    num++;
  }
  
  return num - 1;
}

function calculateBlockPrice(startNum, blockSize, x) {
  let blockPrice = 0;
  for (let i = 0; i < blockSize; i++) {
    blockPrice += calculatePrice(startNum + i, x);
  }
  return blockPrice;
}

function calculatePrice(num, x) {
  let price = 0;
  let binary = num.toString(2);
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1' && (binary.length - i) % x === 0) {
      price++;
    }
  }
  return price;
}




console.log(findMaximumNumber(9,1))
console.log(findMaximumNumber(7,2))
