const getObjFromPath = (obj, path) => {
  const parts = [];

  let current = "";
  for (let i = 0; i < path.length; i++) {
    const char = path[i];
    if (char === ".") {
      if (current) {
        parts.push(current);
        current = "";
      }
    } else if (char === "[") {
      if (current) {
        parts.push(current);
        current = "";
      }
      i++; // move past [
      let index = "";
      while (path[i] !== "]" && i < path.length) {
        index += path[i];
        i++;
      }
      parts.push(index);
    } else {
      current += char;
    }
  }
  console.log("d", current);
  if (current) parts.push(current);

  let result = obj;
  for (let i = 0; i < parts.length; i++) {
    const key = parts[i];
    if (result && result.hasOwnProperty(key)) {
      result = result[key];
    } else {
      return "not found";
    }
  }

  return result;
};

const obj = {
  a: {
    b: {
      c: [1, 2],
    },
  },
  d: {
    d: 3,
  },
};

console.log(getObjFromPath(obj, "a.b.c")); // [1, 2]
console.log(getObjFromPath(obj, "a.b.c[0]")); // 1
console.log(getObjFromPath(obj, "d.d")); // 3
console.log(getObjFromPath(obj, "a.b.c[2]")); // not found
console.log(getObjFromPath(obj, "x.y.z")); // not found
