function KMPSearch(S, W) {
  let M = W.length;
  let N = S.length;
  
  // LPS Array
  let lps = new Array(M);
  computeLPSArray(W, M, lps);
  
  let i = 0; // index for S
  let j = 0; // index for W
  
  while (i < N) {
    if (W[j] === S[i]) {
      j++;
      i++;
    }
    
    if (j === M) {
      console.log("Found pattern at index " + (i - j));
      j = lps[j - 1];
    } else if (i < N && W[j] !== S[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i = i + 1;
      }
    }
  }
}

function computeLPSArray(W, M, lps) {
  let len = 0;
  lps[0] = 0;
  let i = 1;
  
  while (i < M) {
    if (W[i] === W[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }
}

// Example usage
let txt = "ABABDABACDABABCABAB";
let pat = "ABABCABAB";
console.log(KMPSearch(txt, pat));
