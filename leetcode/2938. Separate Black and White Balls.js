var minimumSteps = function (s) {
  let [res, coutOne] = [0, s.length-1]
  for (let i = 0; i < s.length; i++) {
    
    if(s[i] === "1"){
      res+= coutOne - i
      coutOne--
    }
  }
  return res
};

console.log(minimumSteps("11000111")) //6
// console.log(minimumSteps("101")) //1
// console.log(minimumSteps("100")) //2
// console.log(minimumSteps("0111")) //0
// console.log(minimumSteps("111")) //0
// console.log(minimumSteps("000")) //0
