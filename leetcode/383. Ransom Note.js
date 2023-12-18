  var canConstruct = function(ransomNote, magazine) {
    let rez = []
    
    if (magazine.length < ransomNote.length){
      return false
    }
    let ransomNoteMap = new Map()
    let magazineMap = new Map()
    
    for (let i = 0; i < ransomNote.length; i++) {
      if(!ransomNoteMap.has(ransomNote[i])){
        ransomNoteMap.set(ransomNote[i], 1)
      } else {
        ransomNoteMap.set(ransomNote[i], ransomNoteMap.get(ransomNote[i]) + 1)
      }
      
    }
    
    for (let i = 0; i < magazine.length; i++) {
      if(!magazineMap.has(magazine[i])){
        magazineMap.set(magazine[i], 1)
      } else {
        magazineMap.set(magazine[i], magazineMap.get(magazine[i]) + 1)
      }
    }
    
    let set = Array.from(new Set(ransomNote))
    for (let i = 0; i < set.length; i++) {
      if(ransomNoteMap.get(set[i]) > magazineMap.get(set[i]) || !magazineMap.has(set[i])){
        rez.push(false)
        
      } else {
        rez.push(true)
      }
    }
    if(rez.includes(false)){
      return false
    } else{
      return true
    }
  };
// console.log(canConstruct("aa","aab"))
// console.log(canConstruct("aa","ab"))
console.log(canConstruct("fihjjjjei","hjibagacbhadfaefdjaeaebgi"))
