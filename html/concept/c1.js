// map vs for each
// return newArray 
// chaning possible 
const arrMap = [3, 5, 7]
// ! not modify original array
const arrMapNewArr = arrMap.map(item => item * 2)
console.log(arrMapNewArr)
console.log(arrMap)
arrMap.map((item, i) => {

  
  //   arrMap[i] = 4 // ! change arr
  //   arrMap[i] = item + 3// ! change arr
  item[i] = item + 3 // ! not change itterator has value no ref passed
  return item * 2
})

console.log(arrMap)
