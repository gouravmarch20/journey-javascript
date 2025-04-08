const shallowMerge = (...objects) => {
  return Object.assign({}, ...objects);
};

// Test Case
let obj1 = {
  name: "prashant",
  age: 23,
  address: { city: "Delhi" },
  skills: ["JS"],
};
let obj2 = {
  qualification: "BSC CS",
  address: { country: "India" },
  skills: ["React"],
};

console.log(shallowMerge(obj1, obj2));
// Output: { name: "prashant", age: 23, qualification: "BSC CS", address: { country: "India" }, skills: ["React"] }
