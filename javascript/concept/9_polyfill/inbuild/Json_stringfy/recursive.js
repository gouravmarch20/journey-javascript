const myString = (obj) => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  const res = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    const value = obj[key];

    key = `${key}`;

    if (typeof value == "object" && value != null) {
      res[key] = myString(value);
    } else {
      res[key] = value;
    }
  }
  return res;
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
