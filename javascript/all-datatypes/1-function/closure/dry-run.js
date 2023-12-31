
//** demonstrate closure scope chain -> 
let a = 10// global scope
//o1
function sum (arg1) {
  //o2
  return function (arg2) {
    // o3
    return function (arg3) {
      //o4
      return function (arg4) {
        return a + arg1 + arg2 + arg3 + arg4
      }
    }
  }
}
console.log(sum(4)(3)(2)(3))
// sum(4) -> return function  o1
// o2(3) -> return function o2 -->we call o2 function give one argument (3)
// o3(2) -> return function o3 -> we pass 2 as argument -> and invoked function o3
// o4(3) -> return function o4 -> we pass 3 as argument  -> and invoked function o4
//**  o4 function return value  --> it not able to find these varible in it's local scope -> so it ask form outer scope --> then asked from global scope 