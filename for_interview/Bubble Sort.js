function bubbleSort(arr) {
  let sw = false
  while (sw === false) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
        sw = false
        break
      } else {
        sw = true
      }
    }
  }
  return arr
}

console.log(bubbleSort([8, 10, 1, 3, 4, 6, 9, 2, 7, 5]))
