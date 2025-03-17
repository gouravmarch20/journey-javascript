function myStringify(value, seen = new WeakSet()) {
    if (value === null || value === undefined || typeof value === "symbol") {
      return "null";
    }
  
    if (typeof value === "string") {
      return `"${value}"`;
    }
  
    if (typeof value === "number" || typeof value === "boolean") {
      return `${value}`;
    }
  
    if (typeof value === "function") {
      return undefined;
    }
  
    if (Array.isArray(value)) {
      let arrayResult = value
        .map((item) => (myStringify(item, seen) === undefined ? "null" : myStringify(item, seen)))
        .join(",");
      return `[${arrayResult}]`;
    }
  
    if (typeof value === "object") {
      if (seen.has(value)) {
        throw new Error("Circular reference detected");
      }
      seen.add(value);
  
      let objResult = Object.entries(value)
        .filter(([key, val]) => typeof val !== "function" && val !== undefined)
        .map(([key, val]) => `"${key}":${myStringify(val, seen)}`)
        .join(",");
        
      return `{${objResult}}`;
    }
  
    throw new Error(`Unsupported data type: ${typeof value}`);
  }
  
  // Example usage
  const obj = { name: "John", age: 30 };
  obj.circularRef = obj; // Creating a circular reference
  
  try {
    const output = myStringify(obj);
    console.log(output);
  } catch (error) {
    console.error(error.message);
  }
  