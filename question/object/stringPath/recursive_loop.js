const getObjFromPath = (obj, path) => {
  if (!path) return obj;

  // Find the first key (before dot or bracket)
  let key = "";
  let i = 0;

  while (i < path.length && path[i] !== "." && path[i] !== "[") {
    key += path[i];
    i++;
  }

  let remainingPath = path.slice(i);

  // Handle bracket case like [0]
  if (remainingPath.startsWith("[")) {
    let endBracket = remainingPath.indexOf("]");
    let index = remainingPath.slice(1, endBracket);
    key += `.${index}`; // e.g., "c.0"
    remainingPath = remainingPath.slice(endBracket + 1); // skip ]
  }

  // Clean leading dot if any
  if (remainingPath.startsWith(".")) {
    remainingPath = remainingPath.slice(1);
  }

  // Get the current key value
  const nextObj = obj?.[key];

  if (nextObj === undefined) return "not found";

  return getObjFromPath(nextObj, remainingPath);
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
