
console.log(Math.min.apply(null, [1, 2, 3]))// min -> methord so call , bind , apply
// --> point to null just give min
console.log(Math.min.apply([1, 2, 3]))// TODO: HOW --> point to window nothig given 
