function hashMapFromArrayObject(nums) {
  let map = {}
  for (let c of nums) {
    if(c in map){
      map[c]++
    }else{
      map[c] = 1
    }
  }
  return map
}

function hashMapFromArrayMap(nums) {
  
  let map = new Map()
  for (let c of nums) {
    map.has(c) ? map.set(c, map.get(c) + 1) : map.set(c, 1)
  }
  return map
}


console.log(hashMapFromArrayMap([8, 8, 8, 8, 2, 4, 4, 2, 4]))
console.log(hashMapFromArrayObject([8, 8, 8, 8, 2, 4, 4, 2, 4]))
