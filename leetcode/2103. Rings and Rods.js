var countPoints = function (rings) {
  let res = 0
  let map = new Map()
  
  for (let i = 0; i < rings.length - 1; i++) {
    if (i % 2 === 0) {
      map.set(rings[i + 1], map.has(rings[i + 1]) ? map.get(rings[i + 1]) + rings[i] : rings[i])
    }
  }
  for (const mapElement of map) {
    if (mapElement[1].includes('R') && mapElement[1].includes('G') && mapElement[1].includes('B')) {
      res++
    }
  }
  return res
};
console.log(countPoints("B0B6G0R6R0R6G9"))
console.log(countPoints("B0R0G0R9R0B0G0"))
console.log(countPoints("G4"))
