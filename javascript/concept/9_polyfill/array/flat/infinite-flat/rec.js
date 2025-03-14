Array.prototype.flattenRecursive = function () {
  const result = [];

  for (const ele of this) {
    if (Array.isArray(ele)) {
      result.push(...ele.flattenRecursive()); // Recursively flatten
    } else {
      result.push(ele);
    }
  }

  return result;
};

// Example Usage
const arr = [1, [2, 3, [4, 5]], 6];
console.log(arr.flattenRecursive());
// Output: [1, 2, 3, 4, 5, 6]
