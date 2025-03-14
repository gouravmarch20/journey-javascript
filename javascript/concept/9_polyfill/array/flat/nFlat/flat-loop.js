Array.prototype.flat = function (depth = 1) {
  if (typeof depth !== "number" || depth < 0) {
    throw new TypeError("Depth must be a non-negative number");
  }

  let array = [...this];

  for (let j = 0; j < depth; j++) {
    let newArr = [];
    let hasNestedArray = false;

    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (Array.isArray(element)) {
        newArr.push(...element);
        hasNestedArray = true; // Track if there's still nesting
      } else {
        newArr.push(element);
      }
    }

    array = newArr;

    // Stop early if no more nested arrays
    if (!hasNestedArray) break;
  }

  return array;
};

const arr = [1, [[[2]]], [3, 4, [5, 6]]];

console.log(arr.flat(2)); // ✅ [1, [2], 3, 4, 5, 6]
console.log(arr.flat(1)); // ✅ [1, [[2]], 3, 4, [5, 6]]
console.log(arr.flat(3)); // ✅ [1, 2, 3, 4, 5, 6] (Fully flattened)
console.log(arr.flat(Infinity)); // ✅ [1, 2, 3, 4, 5, 6] (Fully flattened)
