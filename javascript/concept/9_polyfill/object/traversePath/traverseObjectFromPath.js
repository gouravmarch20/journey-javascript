/*
    The below function traverses an object using the given path and returns the
    value of the path, provided the path exists. If the path does not exist, the
    function returns ''.

    Steps:

        1. Store all the keys which are present in the path in an array.
           We will be looping through this array.
        2. Initialize the result as the original object.
           We will be updating this result after each iteration of the keys array.
        3. Case a: If the current key is like "someKey[someIndex]"
                   i. Using regex, get the index which is passed in the path.
                   ii. If the index is valid, update the result, else return ''.
           Case b: If the current key is like "someKey"
                   i. If the current result contains this key, update the result,
                      else return ''

*/
const traverseObjectFromPath = (inputObj, path) => {
  try {
    if (typeof path !== "string" && typeof inputObj !== "object") return ""

    const keysArr = path.split(".")

    let requiredValue = inputObj

    for (let i = 0; i < keysArr.length; i++) {
      let currentKey = keysArr[i]

      let checkArrType = currentKey.match(/^[\w]+\[\d+\]$/)
      let checkOtherType = currentKey.match(/^[\w]+$/)

      if (checkArrType) {
        let arrName = currentKey.split("[")[0]
        let arrIndex = currentKey.split("[")[1].split("]")[0]

        if (!Array.isArray(requiredValue[arrName])) return ""

        if (arrIndex) {
          arrIndex = parseInt(arrIndex[0])

          if (arrIndex >= 0 && arrIndex < requiredValue[arrName].length)
            requiredValue = requiredValue[arrName][arrIndex]
          else return ""
        } else return ""
      } else if (checkOtherType) {
        if (currentKey in requiredValue)
          requiredValue = requiredValue[currentKey]
        
        else return ""
      } else return ""
    }

    return requiredValue
  } catch (error) {
    console.log(error)
    return ""
  }
}

const testObj = {
  success: true,
  tenant_info: {
    tenant_name: "Dunzo East Delhi",
    default_billing_address_info: {
      address_id: 1527,
      zone: null,
      entity_type: "TENANT",
      created_date: "2023-01-23T22:00:21.413212",
    },
  },
  grn: [
    {
      grn_id: 100910,
      grn_date_time: "2023-02-22T07:56:27",
      attachments: [],
      invoice_number: null,
      grn_lines: [
        {
          grn_line_id: 101383,
          is_active: false,
          created_at: "2022-12-01T13:11:07.781983",
          tax_info: [
            {
              tax_id: 12,
              tax_name: "GST12",
            },
            {
              tax_id: 10,
              tax_name: "GST10",
            },
          ],
          stock_transfer_line_details: null,
          product_sku_info: {
            product_sku_id: 12837,
            product_sku_name: "Tomato Sauce",
          },
        },
      ],
    },
  ],
}
// const testPath1 = "success"
const testPath3 = "tenant_info.default_billing_address_info.created_date"
// const testPath4 = "grn"
// const testPath5 = "grn[0]"
// const testPath7 = "grn[0].attachments"
const testPath8 = "grn[0].attachments[0]"
const testPath9 = "grn[0].grn_lines"
const testPath10 = "grn[0].grn_lines[0]"




// console.log(`${testPath1}:`, traverseObjectFromPath(testObj, testPath1))
console.log(`${testPath3}:`, traverseObjectFromPath(testObj, testPath3))
// console.log(`${testPath4}:`, traverseObjectFromPath(testObj, testPath4))
// console.log(`${testPath5}:`, traverseObjectFromPath(testObj, testPath5))

// console.log(`${testPath7}:`, traverseObjectFromPath(testObj, testPath7))
// console.log(`${testPath8}:`, traverseObjectFromPath(testObj, testPath8))
// console.log(`${testPath9}:`, traverseObjectFromPath(testObj, testPath9))
// console.log(`${testPath10}:`, traverseObjectFromPath(testObj, testPath10))

