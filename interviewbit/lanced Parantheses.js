var parantheses = function (A) {
  let rez = 0
  let brackets = {
    '(': 1,
    ')': -1
  }
  for (let i = 0; i < A.length; i++) {
    if (A[i] in brackets) {
      rez += (brackets[A[i]])
    }
    if(rez < 0){
      return 0
      
    }
    
  }
  return rez === 0? 1: 0
};
// console.log(parantheses("(' and ')"))
// console.log(parantheses(")(("))
// console.log(parantheses("))((()(())"))
console.log(parantheses("(()((((()("))
