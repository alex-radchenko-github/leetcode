var numSpecial = function (mat) {
  let rez = 0
  
  function sumN(i) {
    let rez = 0
    for (let j = 0; j < mat.length; j++) {
      rez += mat[j][i]
    }
    return rez
  }
  
  function sumM(iLine) {
    let rez = 0
    for (let i = 0; i < mat[iLine].length; i++) {
      rez += mat[iLine][i]
    }
    return rez
  }
  let m = mat.length
  let n = mat[0].length
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === sumM(i)  && sumM(i) === 1) {
        if (sumN(j) === 1) {
          rez++
        }
      }
    }
  }
  return rez
};
console.log(numSpecial([[1, 0, 0], [0, 0, 1], [1, 0, 0]])) //1
console.log(numSpecial([[0,0,0,1],[1,0,0,0],[0,1,1,0],[0,0,0,0]])) //2
