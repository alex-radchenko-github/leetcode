var countAsterisks = function (s) {
 return  s.split("|").filter((__, index) => index % 2 === 0).join('').split("*").length - 1
 
};
console.log(countAsterisks("l|*e*et|c**o|*de|"))
console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l"))
