// 1. If the object is not array or json, return []
// 2. If object is array, iterate over the indices and call the function recursively
// 3. If the object is json, iterate over the keys and call the function recursively


const traverseObjectFromKey = (
  inputObj,
  key,
  currentPath = "",
  result = []
) => {
  if (!inputObj || typeof inputObj !== "object") {
    return result
  }

  if (Array.isArray(inputObj)) {
    for (let i = 0; i < inputObj.length; i++) {
      let newPath = `${currentPath}[${i}]`
      let newObj = inputObj[i]

      traverseObjectFromKey(newObj, key, newPath, result)
    }
  } else {
    for (let tempKey in inputObj) {
      let newPath = currentPath ? `${currentPath}.${tempKey}` : tempKey

      if (tempKey === key)
        result.push({
          path: newPath,
          value: inputObj[tempKey],
        })
      else traverseObjectFromKey(inputObj[tempKey], key, newPath, result)
    }
  }

  return result
}

const testObj = [
  {
    seller_id: 123,
    seller_info: {
      seller_id: 312,
      seller_name: "ABC Enterprises",
    },
    tenant_seller_id: 45667,
  },
  {
    seller_id: 7834,
    seller_info: {
      seller_id: 9384,
      seller_name: "Parry Enterprises",
    },
    tenant_seller_id: 87434,
  },
]

const testKey1 = "seller_id"
const testKey2 = "seller_name"
const testKey3 = "tenant_seller_id"
const testKey4 = "tenant_seller_info"
// const testKey5 = 'key_does_not_exist'

console.log(`${testKey1}:`, traverseObjectFromKey(testObj, testKey1))
// console.log(`${testKey2}:`, traverseObjectFromKey(testObj, testKey2))
// console.log(`${testKey3}:`, traverseObjectFromKey(testObj, testKey3))
// console.log(`${testKey4}:`, traverseObjectFromKey(testObj, testKey4))
// console.log(`${testKey5}:`, traverseObjectFromKey(testObj, testKey5))
