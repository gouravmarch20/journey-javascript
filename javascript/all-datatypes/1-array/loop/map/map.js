// array itterate & return it 
// new array , reference issue solve
const items = [
    { name: 'js', price: 200 },
    { name: 'python', price: 6200 },
    { name: 'java', price: 4200 },
    { name: 'cpp', price: 5200 },
    { name: 'mysql', price: 1200 },

];
const newArray = items.map(item => item)
console.log(newArray)