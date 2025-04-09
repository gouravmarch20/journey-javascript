const myString = (obj, seen = new WeakMap()) => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Check if we've already seen this object
  if (seen.has(obj)) {
    return "[Circular]";
  }

  // Mark this object as seen
  seen.set(obj, true);

  const res = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    const value = obj[key];
    key = `${key}`;

    if (typeof value === "object" && value !== null) {
      res[key] = myString(value, seen); // pass seen along
    } else {
      res[key] = value;
    }
  }

  return res;
};
