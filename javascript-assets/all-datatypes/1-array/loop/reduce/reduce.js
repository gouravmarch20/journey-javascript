// reduce : use in array when form array we have to come in a single value => like adding array item , find 

// 1 argument : previous value
//2 argument : current item value
// ,0 initial value of 1 argument
const items = [
    { name: 'js', price: 200 },
    { name: 'python', price: 6200 },
    { name: 'java', price: 4200 },
    { name: 'cpp', price: 5200 },
    { name: 'mysql', price: 1200 },

];
const newItems = items.reduce((currrentTotal, item) => { return item.price + currrentTotal }, 5)
console.log(newItems)