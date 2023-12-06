// += , *=  ------> save previous value while asignment operator asign as new value
// ! logic ==> sum = sum + toAdd ==> sum += toAdd

//? u += str[i].toUpperCase() ===> u = u + str[i].toUpperCase()

const str = 'wearene'
let upperCase = ''
for (let i = 0; i < str.length; i++) {
  // console.log(str[i]);
  upperCase += str[i].toUpperCase()
}
console.log(upperCase)
