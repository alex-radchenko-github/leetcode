var maxFrequencyElements = function(nums) {
  let res = 0
  function hashMapFromArrayMap(nums) {
    
    let map = new Map()
    for (let c of nums) {
      map.has(c) ? map.set(c, map.get(c) + 1) : map.set(c, 1)
    }
    return map
  }
  
  let arrS = Array.from(hashMapFromArrayMap(nums)).sort((a,b) => b[1]-a[1])
  let max = arrS[0][1]
  for (let i = 0; i <arrS.length ; i++) {
    if(arrS[i][1] === max){
      res +=arrS[i][1]
    }
  }
  return res
};

console.log(maxFrequencyElements([1,2,2,3,1,4]))
console.log(maxFrequencyElements([1,2,3,4,5]))
