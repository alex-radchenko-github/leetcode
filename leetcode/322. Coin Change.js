var coinChange = function (coins, amount) {
  let arr = new Array(amount + 1).fill(Infinity);
  console.log(1)
  arr[0] = 0
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      if(coins[j] <=i){
        arr[i] = Math.min(arr[i], 1+arr[i-coins[j]])
      }
    }
  }
  return arr[amount] !== Infinity ? arr[amount] : -1
};
console.log(coinChange([1, 2, 5], 11));
