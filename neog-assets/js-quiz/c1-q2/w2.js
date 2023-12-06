// slice ->
/* 

//** Array ==> return the selected element 
 return shallow copy  - not modify original array
 start index include , end not included


*/
const animals = ['ant', 'bison', 'camel', 'duck']
const sliceArr = animals.slice(1)
sliceArr.push('refernce tested')
console.log(animals);

const str = 'T h equic';
console.log(str.slice(4, 19));
