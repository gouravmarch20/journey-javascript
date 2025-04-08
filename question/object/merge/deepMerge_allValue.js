const deepMerge = (...objects) => {
  let target = {};

  objects.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        if (Array.isArray(obj[key])) {
          // If key is an array, concatenate unique values
          target[key] = [...new Set([...(target[key] || []), ...obj[key]])];
        } else {
          // If key is an object, recursively merge
          target[key] = deepMerge(target[key] || {}, obj[key]);
        }
      } else {
        // Otherwise, directly assign (including primitives)
        target[key] = obj[key];
      }
    });
  });

  return target;
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
  skills: ["React", "JS"], // Duplicate "JS" should be removed
};

console.log(deepMerge(obj1, obj2));
