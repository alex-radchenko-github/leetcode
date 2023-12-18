var isPerfectSquare = function(num) {
  let sq = Math.sqrt(num)
  return typeof sq === 'number' && sq % 1 === 0
};
