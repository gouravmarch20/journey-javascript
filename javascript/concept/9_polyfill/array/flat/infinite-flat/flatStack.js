const flattenIterative = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array");
  }
  const stack = [...arr];
  const result = [];
  while (stack.length) {
    const element = stack.pop();
    if (Array.isArray(element)) {
      stack.push(...element);
    } else {
      result.push(element);
    }
  }
  return result.reverse();
};

// Test case for Iterative Approach
const resultIterative = flattenIterative([[[[0]], [1]], [[[2], [3]]], [[4], [5]]]);
console.log(resultIterative); // Output: [0, 1, 2, 3, 4, 5]
