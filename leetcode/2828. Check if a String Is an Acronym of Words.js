var isAcronym = function (words, s) {
  if (words.length !== s.length) {
    return false
  }
return words.map(a => a[0]).join("") === s
};

console.log(isAcronym(["alice","bob","charlie"], "abc"))
