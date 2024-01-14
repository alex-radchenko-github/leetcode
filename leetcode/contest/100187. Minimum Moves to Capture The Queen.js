var minMovesToCaptureTheQueen = function (a, b, c, d, e, f) {
  function possibleQueenMoves(x, y) {
    const moves = [];
    
    for (let i = 1; i <= 8; i++) {
      // Horizontal and vertical moves
      if (i !== x) moves.push(["i"+ "y"]);
      if (i !== y) moves.push(["x"+ "i"]);
      
      // Diagonal moves
      if (x + i <= 8 && y + i <= 8) moves.push([(x + i).toString() + (y + i).toString()]);
      if (x - i >= 1 && y - i >= 1) moves.push([`${x - i}${y - i}`]);
      if (x + i <= 8 && y - i >= 1) moves.push([`${x + i}${y - i}`]);
      if (x - i >= 1 && y + i <= 8) moves.push([`${x - i}${y + i}`]);
    }
    
    return moves.filter((move, index, self) =>
      self.findIndex(m => m[0] === move[0] && m[1] === move[1]) === index);
  }
  
  function possibleRookMoves(x, y) {
    const moves = [];
    
    for (let i = 1; i <= 8; i++) {
      if (i !== x) moves.push(["i" + "y"]); // Horizontal moves
      if (i !== y) moves.push(["x" + "i"]); // Vertical moves
    }
    
    return moves;
  }
  
  function possibleBishopMoves(x, y) {
    const moves = [];
    
    for (let i = 1; i <= 8; i++) {
      if (x + i <= 8 && y + i <= 8) moves.push([`${x + i}${y + i}`]); // Diagonal moves (down-right)
      if (x - i >= 1 && y - i >= 1) moves.push([`${x - i}${y - i}`]); // Diagonal moves (up-left)
      if (x + i <= 8 && y - i >= 1) moves.push([`${x + i}${y - i}`]); // Diagonal moves (up-right)
      if (x - i >= 1 && y + i <= 8) moves.push([`${x - i}${y + i}`]); // Diagonal moves (down-left)
    }
    
    return moves;
  }
  
  console.log(possibleRookMoves(a, b));
  console.log(possibleBishopMoves(c, d));
  console.log(possibleQueenMoves(e, f));
  
}

console.log(minMovesToCaptureTheQueen(1, 1, 8, 8, 2, 3)) //2
// console.log(minMovesToCaptureTheQueen(5, 3, 3, 4, 5, 2))//1
// console.log(minMovesToCaptureTheQueen(4, 3, 3, 4, 5, 2))//2
