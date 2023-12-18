var balancedStringSplit = function(s) {
  let mainRes = 0
  let res = 0
  for (let i = 0; i < s.length; i++) {
    s[i] === "R"?res++:res--
    if(res === 0){
      mainRes++
    }
  }
  return mainRes

};
console.log(balancedStringSplit("RLRRLLRLRL"))
