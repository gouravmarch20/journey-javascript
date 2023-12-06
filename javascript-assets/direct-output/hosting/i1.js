// logic : b is var so lexical scoping 
// if variblle is not defined then the typeof --> return undefined datatype
const foo = () => {
  let a = (b = 0)
  a++
  return a
}
foo()
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
// console.log(a)//** error
console.log(b)
