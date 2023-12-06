const noArr = [11, 3, 4, 5, 96, 66];
const lessThan10 = (num) => num < 10;
const incrementByTwo = (num) => num + 2;
//
console.log(noArr.filter(lessThan10));
console.log(noArr.map(incrementByTwo));
