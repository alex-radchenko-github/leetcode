var beautifulIndices = function (s, a, b, k) {
  function findAllOccurrences(substring, string) {
    let indices = [];
    let index = string.indexOf(substring);
    while (index !== -1) {
      indices.push(index);
      index = string.indexOf(substring, index + 1);
    }
    return indices;
  }
  
  const aIndices = findAllOccurrences(a, s);
  const bIndices = findAllOccurrences(b, s);
  let beautifulIndices = [];
  
  for (let i = 0; i < aIndices.length; i++) {
    for (let j = 0; j < bIndices.length; j++) {
      if (Math.abs(aIndices[i] - bIndices[j]) <= k) {
        beautifulIndices.push(aIndices[i]);
        break;
      }
    }
  }
  return beautifulIndices;
};

console.log(beautifulIndices("isawsquirrelnearmysquirrelhouseohmy", "my", "squirrel", 15))
console.log(beautifulIndices("abcd", "a", "a", 4))
