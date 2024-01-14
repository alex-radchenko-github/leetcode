function removeDuplicates(arr) {
  let cur = 0
  for (let i = 0; i < arr.length; i++) {
    if (cur !== arr[i]) {
      cur++
      arr[cur] = arr[i]
    }
  }
  return cur+1
}
// let slow = 0;
// for (let fast = 0; fast < arr.length; fast++) {
//   if (arr[fast] !== arr[slow]) {
//     slow++;
//     arr[slow] = arr[fast];
//   }
// }
// return slow + 1;
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
console.log(removeDuplicates([1,1,2]))
