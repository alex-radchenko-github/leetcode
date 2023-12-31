var getGoodIndices = function (variables, target) {
  let rez = []
  for (let i = 0; i < variables.length; i++) {
    let good = Math.pow((Math.pow(variables[i][0], variables[i][1]) % 10), variables[i][2]) % variables[i][3]
    if (good === target) {
      rez.push(i)
    }
  }
  return rez
};
// console.log(getGoodIndices([[2, 3, 3, 10], [3, 3, 3, 1], [6, 1, 1, 4]], 2))
// console.log(getGoodIndices([[9,2,15,3], [31,12,21,24]], 1))
console.log(getGoodIndices([[30,5,43,2],[15,50,35,41],[45,34,41,32],[14,37,33,13],[6,8,1,53],[37,1,12,52],[42,37,2,52],[9,2,15,3],[31,12,21,24],[52,24,6,12],[51,35,21,52],[30,18,10,2],[27,31,50,27],[29,25,26,32],[15,38,43,17],[22,12,16,43],[48,9,15,6],[41,26,22,21],[41,49,52,26],[53,38,9,33]], 1))
