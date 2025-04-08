const obj = {
  name: "gourav",
  nested: {
    a: "1",
    b: 2,
  },
  nested_1: {
    a: "1",
    b: 2,
  },
};

function deepSeal(obj) {
  if (typeof obj !== "object" || obj === null) return;

  // Seal the object itself
  Object.seal(obj);

  // Get all property names and seal nested objects if they are also objects
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      deepSeal(obj[key]);
    }
  });
}

deepSeal(obj);

delete obj.nested_1; // This will fail because obj is sealed
obj.nested.newKey = 4; // This will also fail because obj.nested is sealed

console.log(obj);
console.log(Object.isSealed());
