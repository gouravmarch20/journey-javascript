const searchObj = (obj, find) => {
  //NOTe why
  if (obj === find) return obj;

  for (const key in obj) {
    const value = obj[key];

    if (value === find) {
      return obj;
    }
    // ! m :::  recursive test in object nested
    if (typeof value === "object" && value !== null) {
      const result = Array.isArray(value)
        ? filterArr(value, find)
        : searchObj(value, find);
      if (result) return result;
    }
  }
  return null;
};

const filterArr = (array, find) => {
  // First check if the array itself is the match
  if (array === find) return array;

  for (const element of array) {
    // Check if current element matches
    if (element === find) {
      return array;
    }

    // Recursively search nested objects/arrays
    if (typeof element === "object" && element !== null) {
      const result = Array.isArray(element)
        ? filterArr(element, find)
        : searchObj(element, find);
      if (result) return result;
    }
  }

  return null; // Only return null after checking all elements
};

const array = [
  {
    name: "sanket",
    rool: "rool_lee",
    nested: {
      prop: "deep_value",
      arr: ["nested_array", "target"],
    },
  },
  "hello",
  ["not_give", "belive"],
  null,
];

console.log(filterArr(array, "target")); // Finds nested array
console.log(filterArr(array, "not_give")); // Finds top-level array
console.log(filterArr(array, "deep_value")); // Finds containing object
console.log(filterArr(array, "missing"));
