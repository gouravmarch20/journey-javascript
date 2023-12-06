// in object
// TODO: PRICE RANGE FEATURE---> add dolar -> gte/lte
// mongodb  operator
const obj = {
  price: 234,
  kit: 32
}
let key = "kit"
let queryStr = JSON.stringify(obj)
queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, key => `$${key}`)
console.log(queryStr)
JSON.parse(queryStr)
