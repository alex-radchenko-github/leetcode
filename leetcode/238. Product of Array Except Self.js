var productExceptSelf = function (nums) {
  
  
  let rez1 = [1]
  let prevpProduct = rez1[0]
  
  for (let i = 0; i < nums.length-1; i++) {
    prevpProduct = prevpProduct * nums[i]
    rez1.push(prevpProduct)
  }
  
  nums.reverse()
  prevpProduct = 1
  
  let rez2 = [1]
  
  for (let i = 0; i < nums.length-1; i++) {
    prevpProduct = prevpProduct * nums[i]
    rez2.push(prevpProduct)
  }
  

  rez2.reverse()

  for (let i = 0; i < rez1.length; i++) {
    rez1[i] = rez1[i] * rez2[i]

  }

  return rez1
  
}

console.log(productExceptSelf([1, 2, 3, 4]))
// console.log(productExceptSelf([4,3,2,1,2]))
// console.log(productExceptSelf([-1,1,0,-3,3]))
