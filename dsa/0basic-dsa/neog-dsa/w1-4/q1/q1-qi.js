//l1 -> rest operator used as ...arr not [...arr]
// const findMin = ([...args]) => console.log(args);
// const findMin = (...args) => Math.min(...args)
const findMin = (...args) => Math.min(3, -12, 5, 9, 1, -9)

console.log(findMin(3, -12, 5, 9, 1, -9))
