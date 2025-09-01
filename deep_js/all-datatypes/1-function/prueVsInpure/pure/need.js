// Pure function : no change it outer varible ,same input same output 
//! TO AVOID SIDE EFFECT long debugging ==> WE USE PURE FUNCTION concept  

// Pure function : no change it outer varible ,same input same output

const array = [1, 4, 5, 6, 7]
// ? SIDE EFFECT
function mutateArray (arr) {
  arr.pop()
  arr.pop()
  arr.pop()
  arr.pop()
  arr.push('side effects')
}
mutateArray(array)
console.log(array)
