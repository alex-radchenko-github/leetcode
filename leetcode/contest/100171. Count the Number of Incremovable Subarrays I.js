var incremovableSubarrayCount = function (nums) {
  let rez = 0
  let cur = 0
  let god = true
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      cur = -1
      god = true
      for (let k = 0; k < nums.length; k++) {
        if (k<i || k>j){
          if (nums[k] > cur) {
            cur = nums[k];
          }else {
            god = false;
            break;
          }  let rez = 0
          let cur = 0
          let god = true
          for (let i = 0; i < nums.length; i++) {
            for (let j = i; j < nums.length; j++) {
              cur = -1
              god = true
              for (let k = 0; k < nums.length; k++) {
                if (k<i || k>j){
                  if (nums[k] > cur) {
                    cur = nums[k];
                  }else {
                    god = false;
                    break;
                  }
                }
              }
              if (god) rez++;
            }
            
          }
          return rez
        }
      }
      if (god) rez++;
    }
    
  }
    return rez
}
;

// console.log([ 1, 2, 3, 4 ].join("").replace("123",''))

console.log(incremovableSubarrayCount([1, 2, 3, 4]))
console.log(incremovableSubarrayCount([6, 5, 7, 8]))
console.log(incremovableSubarrayCount([8, 7, 6, 6]))
console.log(incremovableSubarrayCount([2,10]))
