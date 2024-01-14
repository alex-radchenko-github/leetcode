function KMP(pattern, text) {
  // Preprocess pattern to create lps (Longest Prefix Suffix) array
  function computeLPSArray(pattern) {
    let length = 0;
    let lps = Array(pattern.length).fill(0);
    let i = 1;
    while (i < pattern.length) {
      if (pattern[i] === pattern[length]) {
        length++;
        lps[i] = length;
        i++;
      } else {
        if (length !== 0) {
          length = lps[length - 1];
        } else {
          lps[i] = 0;
          i++;
        }
      }
    }
    return lps;
  }
  
  let lps = computeLPSArray(pattern);
  let i = 0; // index for text
  let j = 0; // index for pattern
  let occurrences = [];
  
  while (i < text.length) {
    if (pattern[j] === text[i]) {
      j++;
      i++;
    }
    if (j === pattern.length) {
      occurrences.push(i - j);
      j = lps[j - 1];
    } else if (i < text.length && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i = i + 1;
      }
    }
  }
  
  return occurrences;
}

function beautifulIndices(s, a, b, k) {
  const aIndices = KMP(a, s);
  const bIndices = KMP(b, s);
  let beautifulIndices = [];
  
  for (let ai of aIndices) {
    for (let bi of bIndices) {
      if (Math.abs(ai - bi) <= k) {
        beautifulIndices.push(ai);
        break; // Once a match is found for this index, no need to check further
      }
    }
  }
  
  return beautifulIndices;
}




console.log(beautifulIndices("isawsquirrelnearmysquirrelhouseohmy", "my", "squirrel", 15))//[16,33]
console.log(beautifulIndices("abcd", "a", "a", 4))//[0]
console.log(beautifulIndices("aba", "a", "a", 1))//[0, 2]
console.log(beautifulIndices("ithhi", "t", "hhi", 4))//[1]
