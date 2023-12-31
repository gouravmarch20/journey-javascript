const obj = {
  date: new Date(),
}
const obj1 = JSON.parse(JSON.stringify(obj))
//^ date ko string mai convert -->date object has same look like object

console.log(typeof obj.date) //? date object
console.log(typeof obj1.date) //? string
