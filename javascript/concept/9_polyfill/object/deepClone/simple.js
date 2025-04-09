function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const clone = Array.isArray(obj) ? [] : {};
  // ! debug falling
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      if (value instanceof Date) {
        clone[key] = new Date(value);
      } else if (value instanceof RegExp) {
        clone[key] = new RegExp(value.source, value.flags);
      } else if (typeof value === "object") {
        clone[key] = deepClone(value);
      } else {
        clone[key] = value;
      }
    }
  }

  return clone;
}

// const obj = {
//   name: 5,
//   obj1: {
//     class: "4343",
//   },
//   theArray: [1, 2, 3, [4, 5]],
// };
// const res = deepClone(obj);
// res.obj1.class = 44;
// res.theArray[3] = [333, "fdasd"];

// console.log(obj);
// console.log(res);

const a = {};
a.check = true;
a.self = a;
console.log(a);
console.log(Object.keys(a));
const b = deepClone(a); // ❌ Maximum call stack size exceeded
