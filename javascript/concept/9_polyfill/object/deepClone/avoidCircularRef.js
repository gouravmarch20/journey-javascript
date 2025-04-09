function deepClone(obj, hash = new WeakMap()) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (hash.has(obj)) {
    return hash.get(obj); // prevent circular reference issues
  }

  const clone = Array.isArray(obj) ? [] : {};
  hash.set(obj, clone);

  const keys = Object.keys(obj);
  for (const key of keys) {
    const value = obj[key];

    if (value instanceof Date) {
      clone[key] = new Date(value);
    } else if (value instanceof RegExp) {
      clone[key] = new RegExp(value.source, value.flags);
    } else if (typeof value === "object" && value !== null) {
      clone[key] = deepClone(value, hash);
    } else {
      clone[key] = value;
    }
  }

  return clone;
}

const a = {};
a.check = true;
a.self = a;
const b = deepClone(a);
console.log(Object.keys(a));
