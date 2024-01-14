function maximizeSquareArea(m, n, hFences, vFences) {
  
  let res = 0
  let v = [1, m, ...hFences]
  let h = [1, n, ...vFences]
  
  v = v.sort((a, b) => b-a)
  h = h.sort((a, b) => b-a)
  console.log(v,h)
  let min = Math.min(v.length, h.length)
  for (let i = 0; i < min; i++) {
    if (v.includes(h[i])){
      res = h[i]
      break
    }
  }
  
  return res

  
}

console.log(maximizeSquareArea(4, 3, [2, 3], [2])) //4
// console.log(maximizeSquareArea(6, 7, [2], [4])) //-1
console.log(maximizeSquareArea(4,4,[2],[2,3]))//9
//
// //1 2 3 4
// //2
// //3
// //4
//
