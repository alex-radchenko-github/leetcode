var minimumCost = function (source, target, original, changed, cost) {
  let res = 0
  let temp = []
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== target[i]) {
      temp.push([source[i], target[i]])
    }
  }
  
  let map = new Map()
  for (let i = 0; i < source.length; i++) {
    map.set()
    
  }
  // function change(s, t) {
  //   let resTemp = 0
  //   let count = 0
  //   while (count < source.length || s!==t){
  //     s.index
  //   }
  // }
  console.log(temp)
};
console.log(minimumCost(source = "abcd", target = "acbe", original = ["a", "b", "c", "c", "e", "d"], changed = ["b", "c", "b", "e", "b", "e"], cost = [2, 5, 5, 1, 2, 20]))
