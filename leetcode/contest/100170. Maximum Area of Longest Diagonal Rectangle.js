var areaOfMaxDiagonal = function(dimensions) {
  let maxDiagonal = 0;
  let maxArea = 0;
  
  for (let i = 0; i < dimensions.length; i++) {
    const [length, width] = dimensions[i];
    const diagonal = Math.sqrt(length * length + width * width);
    const area = length * width;
    
    if (diagonal > maxDiagonal || (diagonal === maxDiagonal && area > maxArea)) {
      maxDiagonal = diagonal;
      maxArea = area;
    }
  }
  
  return maxArea;
};
console.log(areaOfMaxDiagonal([[9,3],[8,6]]))
