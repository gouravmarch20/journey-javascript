const flattenObject = (obj, parent) => {
  const finalObj = {}

  const generateFlatObjects = (obj, parent) => {
    for (let key in obj) {
      const newParent = parent + key
      const value = obj[key]

      console.log(newParent)
      if (typeof obj[key] === "object") {
        generateFlatObjects(value, newParent + ".")
      } else {
        finalObj[newParent] = value
      }
    }
  }
  generateFlatObjects(obj, parent)

  return finalObj
}
const obj = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    // O: {
    //   L: 56,
    // },
    // Q: [1, 2],
  },
}
console.log(flattenObject(obj, ""))
