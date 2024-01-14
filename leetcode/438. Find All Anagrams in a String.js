var findAnagrams = function (s, p) {
  let res = [];
  let sMap = new Map();
  let pMap = new Map();
  
  // Populate pMap with characters from p
  for (let char of p) {
    pMap.set(char, (pMap.get(char) || 0) + 1);
  }
  
  // Initialize the first window
  for (let i = 0; i < p.length; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
  }
  
  // Helper function to check if two maps are equal
  function equalsMap(map1, map2) {
    if (map1.size !== map2.size) return false;
    for (const [key, val] of map1) {
      if (!map2.has(key) || map2.get(key) !== val) return false;
    }
    return true;
  }
  
  // Check the first window
  if (equalsMap(sMap, pMap)) {
    res.push(0);
  }
  
  // Slide the window
  for (let i = p.length; i < s.length; i++) {
    // Remove the character going out of the window
    if (sMap.get(s[i - p.length]) === 1) {
      sMap.delete(s[i - p.length]);
    } else {
      sMap.set(s[i - p.length], sMap.get(s[i - p.length]) - 1);
    }
    
    // Add the new character coming into the window
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
    
    // Check if the current window is an anagram
    if (equalsMap(sMap, pMap)) {
      res.push(i - p.length + 1);
    }
  }
  
  return res;
  
};
console.log(findAnagrams("cbaebabacd", "abc"))
console.log(findAnagrams("abab", "ab")) //[0,1,2]
