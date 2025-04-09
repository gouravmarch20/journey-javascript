const myStringify = (obj) => {
  if (obj === null) return "null";
  if (typeof obj === "string") return `"${obj}"`;
  if (typeof obj === "number" || typeof obj === "boolean") return String(obj);

  if (Array.isArray(obj)) {
    const items = obj.map((item) => myStringify(item));
    return `[${items.join(",")}]`;
  }

  if (typeof obj === "object") {
    const entries = Object.entries(obj).map(
      ([key, value]) => `"${key}":${myStringify(value)}`
    );
    return `{${entries.join(",")}}`;
  }

  return "null"; // fallback
};
const json = {
  pokemon: ["awara", "lv"],
  name: "gourav",
  no: 55,
  isActive: false,
  phoneNumber: null,
  pokemon: ["awara", "lv", 444, null, true],
  loop: {
    show: 435,
  },
};

console.log(myString(json));
