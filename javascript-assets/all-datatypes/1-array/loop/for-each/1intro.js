// foreach : return nothing , for Loop syntax small syntax to itterate array ,no return keyword require , no chaning possible

// no ref issue means not modify real array

// ** can return any value in forEach && can not use return keyword because it return nothing
const array = [3, 5, 34]
console.log(array.forEach(i => i)) // return undefine
array.forEach(function (element, index) {
  console.log(element, '----===---', index)
})
