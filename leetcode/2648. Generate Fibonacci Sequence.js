/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  let [prev, current] = [0, 1];
  while (true) {
    yield prev;
    [prev, current] = [current, prev + current];
  }
  
  
};


const gen = fibGenerator();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)


/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
