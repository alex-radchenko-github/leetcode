var getSum = function (a, b) {

}
// var getSum = function (a, b
// ) {
//   let sign = Boolean
//   let res = []
//   let dic = {
//     plus: [],
//     minus: []
//   }
//   if (a > 0) {
//     for (let i = 0; i < a; i++) {
//       dic.plus.push(1)
//     }
//   }
//   if (b > 0) {
//     for (let i = 0; i < b; i++) {
//       dic.plus.push(1)
//     }
//   }
//   if (a < 0) {
//     for (let i = 0; i < Math.abs(a); i++) {
//       dic.minus.push(1)
//     }
//   }
//   if (b < 0) {
//     for (let i = 0; i < Math.abs(b); i++) {
//       dic.minus.push(1)
//     }
//   }
//
//   // console.log(dic)
//
//
//
//   if (dic.plus.length === dic.minus.length) {
//     return 0
//   }
//   if (
//     dic.plus.length === 0) {
//     return -dic.minus.length
//   }
//   if (
//     dic.minus.length === 0) {
//     return dic.plus.length
//   }
//
//   if (
//     dic.plus.length > dic.minus.length ) {
//     for (let i = 0; i < dic.minus.length; i++) {
//       dic.plus.pop()
//     }
//     return dic.plus.length
//   }
//   if (
//     dic.minus.length > dic.plus.length ) {
//     for (let i = 0; i < dic.plus.length; i++) {
//       dic.minus.pop()
//     }
//     return -dic.minus.length
//   }
// };

// console.log(getSum(5, -8))
// console.log(getSum(-3, -4))
console.log(getSum(1, 1))
// console.log(getSum(3, -2))
// console.log(getSum(-3, 2))
