// not stop after find --> due to loop --> if true filter store in array --> else continue their itteration
const categoryName = ['pencil', 'copy', 'pen', 'calli' , 'soft copy']
console.log(categoryName.filter(b => b.includes('a')))
console.log(categoryName.filter(b => b.includes('pen')))

console.log(categoryName.filter(b => b.includes(''))) // no space ==>each char have no space
console.log(categoryName.filter(b => b.includes(' '))) // only 1 item have empty space
console.log(categoryName.filter(b => b.includes())) //nothing given
