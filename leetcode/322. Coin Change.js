var coinChange = function (coins, amount) {
  const count = new Array(amount + 1).fill(Infinity)
  // it's zero because there's no amount that coin can be counted
  count[0] = 0
  
  for(const currentCoin of coins){
    for(let currentAmount = currentCoin; currentAmount <= amount; currentAmount++){
      // начинаем с currentAmount из currentCoin
      // потому что минимальная сумма, которую мы можем начать, — это цена текущей монеты.
      // Если текущая монета равна 10, то currentAmount не может быть ниже 10.
      // Использование монеты 10 уже выполнило сумму 10
      
      // здесь +1 означает, что мы использовали текущую монету
      // поэтому мы хотим считать от суммы, где currentAmount - currentCoin
      // так что думайте, что каждый индекс массива count — это каждая сумма от 0 до целевой суммы
      
      count[currentAmount] = Math.min(count[currentAmount], count[currentAmount - currentCoin] + 1)
    }
  }
  
  return count[amount] === Infinity ? -1 : count[amount]
};
console.log(coinChange([1, 2, 5], 11))
          //  Math.min(dp[i], dp[i - coin] + 1)
// 11-1=10    Math.min(dp[i], dp[i - coin] + 1)
// 11-2=9
// 11-5=6

