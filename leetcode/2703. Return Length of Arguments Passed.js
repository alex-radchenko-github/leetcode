var argumentsLength = function (...args) {
  let aaa = args
  console.log(aaa.length)
  console.log(typeof aaa)
  
  
};

console.log(argumentsLength([{}, null, "3"]))
