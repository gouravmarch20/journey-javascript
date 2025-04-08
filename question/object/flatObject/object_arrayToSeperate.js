const getFlatObj = (obj, path = "", res = {}) => {
  for (const key in obj) {
    const newP = path ? path + "_" + key : key;

    if (typeof obj[key] === "object" && obj[key] !== null) {
      if (Array.isArray(obj[key])) {
        // Handle arrays by appending index to the key
        obj[key].forEach((item, index) => {
          const arrayKey = `${newP}_${index}`;
          if (typeof item === "object" && item !== null) {
            getFlatObj(item, arrayKey, res);
          } else {
            res[arrayKey] = item;
          }
        });
      } else {
        getFlatObj(obj[key], newP, res); // Proper recursive call
      }
    } else {
      res[newP] = obj[key];
    }
  }
  return res;
};

const obj2 = {
  x: "test",
  y: {
    z: 42,
    arr: [5, { nested: "value" }],
  },
};

const result = getFlatObj(obj, "", {});
const result1 = getFlatObj(obj2, "", {});

console.log(result);
console.log(result1);
