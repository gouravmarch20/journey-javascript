const flattenObject = (obj, path = "", result = {}) => {
    for (const key in obj) {
      let newKey = path ? `${path}_${key}` : key;
  
      if (Array.isArray(obj[key])) {
        if (obj[key].length === 0) {
          result[newKey] = []; // Handle empty arrays
        } else {
          obj[key].forEach((item, index) => {
            flattenObject(item, `${newKey}_${index}`, result);
          });
        }
      } else if (obj[key] !== null && typeof obj[key] === "object") {
        if (Object.keys(obj[key]).length === 0) {
          result[newKey] = {}; // Handle empty objects
        } else {
          flattenObject(obj[key], newKey, result);
        }
      } else {
        result[newKey] = obj[key]; // Preserve `null` values
      }
    }
    return result;
  };
  
  // ✅ Test Cases
  const user = {
    name: "Vishal",
    age: null,
    address: {
      primary: {
        house: "109",
        street: {
          main: "21",
          cross: null,
        },
      },
      secondary: null,
    },
    phones: [
      { type: "home", number: "1234567890" },
      { type: "work", number: null },
    ],
    preferences: null,
    emptyObj: {},
    emptyArr: [],
  };
  
  console.log(flattenObject(user));
  