var largestGoodInteger = function (num) {
  let rez = []
  let triggerStart = false
  let start = -Infinity
  let end = Infinity
  for (let i = 0; i < num.length - 1; i++) {
    if (num[i] === num[i + 1] && triggerStart === false) {
      triggerStart = true
      start = i
      end = i + 1
    } else if (num[i] === num[i + 1] && triggerStart === true && i !== num.length-2) {
      end = i + 1
    } else if (num[i] === num[i + 1] && triggerStart === true && i === num.length-2) {
      end = i + 1
      triggerStart = false
      rez.push(num.slice(start, start +3))
    } else if (num[i] !== num[i + 1] && triggerStart === true) {
      triggerStart = false
      if(num.slice(start, end + 1).length >=3){
        rez.push(num.slice(start, start +3))
      }
      
    }
    
  }
  return rez.length === 0? '' :rez.sort((a, b) => a[0] - b[0])[rez.sort((a, b) => a[0] - b[0]).length -1]
  
};

console.log(largestGoodInteger("6777133111339999"))
console.log(largestGoodInteger("6777133339"))
console.log(largestGoodInteger("74444"))


// let temp= ['999','888','777','666','555','444','333','222','111','000']
// for (let i = 0; i < temp.length; i++) {
//   if(num.includes(temp[i])){
//     return temp[i]
//   }
// }
// return ''
