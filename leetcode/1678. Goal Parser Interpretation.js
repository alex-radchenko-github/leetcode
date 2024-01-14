var interpret = function(command) {
  let aaa= command.replaceAll("()","o").replaceAll("(al)","al")
  console.log(aaa)
};
console.log(interpret("G()(al)"))
console.log(interpret("(al)G(al)()()G"))
