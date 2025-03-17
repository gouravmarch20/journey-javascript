function deepClone(obj, seen = new WeakMap()) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle circular references
  if (seen.has(obj)) {
    return seen.get(obj);
  }

  // Create a new object or array based on the type
  const clone = Array.isArray(obj) ? [] : {};

  // Store the clone to handle circular references
  seen.set(obj, clone);

  // Iterate through all keys of the object or array
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      if (value instanceof Date) {
        clone[key] = new Date(value);
      } else if (value instanceof RegExp) {
        clone[key] = new RegExp(value.source, value.flags);
      } else if (typeof value === "object") {
        clone[key] = deepClone(value, seen);
      } else {
        // Direct copy for primitive values
        clone[key] = value;
      }
    }
  }

  return clone;
}
function testDeepClone() {
  const circularObj = { a: 1, b: { c: 2 } };
  circularObj.self = circularObj; // Creating a circular reference

  const original = {
    num: 42,
    str: "Hello",
    bool: true,
    nil: null,
    undef: undefined,
    arr: [1, 2, { x: 3 }],
    obj: { key: "value", nested: { deep: "test" } },
    date: new Date(),
    regex: /abc/gi,
    circular: circularObj,
  };

  const cloned = deepClone(original);

  // console.log("Original:", original);
  // console.log("Cloned:", cloned);

  // Assertions
  console.assert(original !== cloned, "Clone should be a new object");
  console.assert(original.arr !== cloned.arr, "Arrays should be cloned");
  console.assert(original.obj !== cloned.obj, "Objects should be cloned");
  console.assert(
    original.date.getTime() === cloned.date.getTime(),
    "Dates should be equal"
  );
  console.assert(
    original.regex.toString() === cloned.regex.toString(),
    "RegEx should be equal"
  );
  console.assert(
    original.circular !== cloned.circular,
    "Circular reference should be cloned correctly"
  );
  console.assert(
    original.circular.self !== cloned.circular.self,
    "Circular reference should not be same as original"
  );

  console.log("All tests passed!");
}

// Run the test
testDeepClone();
