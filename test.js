let a = ['1', '3', '4', '5']
console.log(a);
[a[0], a[1]] = [a[1], a[0]]
console.log(a)

const c = new Array(26).fill(0).map(() => new Array(26).fill(Infinity));
console.log(c)
