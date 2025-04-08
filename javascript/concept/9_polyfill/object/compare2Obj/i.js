const obj1 = {
  name: "hitman",
  rool: 43,
  noOfStudent: [4, 5, 7],
  nested: { name: "hitman", rool: 43, noOfStudent: [4, 7] },
};
const obj2 = {
  rool: 43,
  nested: { name: "hitman", rool: 43, noOfStudent: [4, 7] },
  name: "hitman",
  noOfStudent: [4, 5, 7],
};
const compareObj = (obj1, obj2) => {
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);
  if (key1.length !== key2.length) {
    return false;
  }
  for (const key in obj1) {
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }
    const val1 = obj1[key];
    const val2 = obj2[key];

    const areObjects =
      val1 &&
      typeof val1 === "object" &&
      typeof val2 === "object" &&
      !Array.isArray(val1);

    if (areObjects) {
      // ! prematurely without checking the remaining properties any nested object comparison returns true, the entire function might return true
      //issue ::: return compareObj(obj1[key], obj2[key]);
      if (!compareObj(obj1[key], obj2[key])) {
        return false;
      }
    } else if (Array.isArray(obj1[key])) {
      if (!Array.isArray(val2)) return false;
      if (val1.length !== val2.length) return false;
      const sortedArr1 = [...obj1[key]].sort();
      const sortedArr2 = [...obj2[key]].sort();
      for (let i = 0; i < sortedArr1.length; i++) {
        const elem1 = sorted1[i];
        const elem2 = sorted2[i];

        // If elements are objects, recursively compare them
        if (typeof elem1 === "object" && elem1 !== null) {
          if (!compareObj(elem1, elem2)) return false;
        } else if (elem1 !== elem2) {
          return false;
        }
      }
    } else {
      if (val1 !== val2) return false;
    }
  }
  return true;
};
const r = compareObj(obj1, obj2);
console.log(r);
