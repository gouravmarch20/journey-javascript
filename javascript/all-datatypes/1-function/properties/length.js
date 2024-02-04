const funOne = () => {}
const funTwo = (a, b) => {}

//? default value above length not give
const funThree = (a, b = 'node')  => {}
const funFour = (a = 'gati', b) => {}
const funFive = (a, b , c ,d, ...rest) => {}

console.log(funOne.length);
console.log(funTwo.length);
console.log(funThree.length);
console.log(funFour.length);
console.log(funFive.length);