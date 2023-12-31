// delete --> remove value but that item remain emplty && get count in array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];
delete fruits[3];
console.log(fruits);
console.log(fruits.length)