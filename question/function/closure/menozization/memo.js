function memoize(fn) {
  const cache = {};
  return function(x) {
    if (cache[x] !== undefined) {
      console.log("-- Returning from cache --");
      return cache[x];
    }
    console.log("-- Computing new value --");
    cache[x] = fn(x);
    return cache[x];
  };
}

// Simple function (no recursion needed)
const square = (n) => n * n;

const memoSquare = memoize(square);

console.log(memoSquare(5)); // Computing -> 25
console.log(memoSquare(5)); // Cached -> 25
console.log(memoSquare(6)); // Computing -> 36
console.log(memoSquare(6)); // Cached -> 36