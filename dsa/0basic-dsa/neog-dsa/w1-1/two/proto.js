// m1 : [i]  forgot with this
Array.prototype.arrLength = function () {
  for (var i = 0; this[i] !== undefined; i++) {}
  return i
}
console.log([1, 4, 'ki'].arrLength())
