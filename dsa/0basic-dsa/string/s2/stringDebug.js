// string is primitive so pass by value here

let myName = 'gourav'
let hisName = myName
hisName = 'gohan'
console.log(myName)

// ! string inside object ==> call by ref
const objOne = {
  id: 3,
  myName: 'gitman'
}
const objTwo = objOne//? we had passed memory block address of objOne --> so any modify in objTwo will apper in objOne ==> changing that address value 
objTwo.myName = 'gohan '
console.log(objOne.myName)
//! string inside array ==> call by ref
const arr = ['a']
const arrOne = arr
arrOne[0] = 'vi'
console.log(arr);