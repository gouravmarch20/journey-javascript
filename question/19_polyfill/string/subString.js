function polyfillStartsWith() {
  if (!String.prototype.startsWithMy) {
    String.prototype.startsWithMy = function (toFind, startFrom = 0) {
  

      return this.substring(startFrom, startFrom + toFind.length) === toFind;
    };
  }
}
polyfillStartsWith(); // Apply the polyfill

console.log("Hello World".startsWithMy("Hello")); // true
console.log("Hello World".startsWithMy("World")); // false
console.log("Hello World".startsWithMy("lo", 3)); // true
console.log("Hello World".startsWithMy(10)); // TypeError
