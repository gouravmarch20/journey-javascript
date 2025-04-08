const obj = {
  a: "gourav",
  b: [1, 3, 4],
  c: {
    a: "gourav",
    b: [1, 3, 4],
  },
};
const obj2 = {
  x: "test",
  y: {
    z: 42,
  },
};

const getFlatObj = (obj, path, res) => {
  for (const key in obj) {
    newP = path ? path + "_" + key : key;
    console.log("--", path, newP);
    if (typeof obj[key] == "object" && !Array.isArray(obj[key])) {
      return getFlatObj(obj[key], newP, res);
    } else {
      res[newP] = obj[key];
    }
  }
  return res;
};
const result = getFlatObj(obj, "", {});
const result1 = getFlatObj(obj2, "", {});

console.log(result);
console.log(result1);
