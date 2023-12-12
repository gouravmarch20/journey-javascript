// can use flat & map together
const number = [1, 3, 4, [67, 5]] //! no work  because two item can not multiple by map case
const numberArr = [1, 3, 4, [5]]
number.flatMap(item => item * 10)
console.log(number.flatMap(item => item * 10))
console.log(numberArr.flatMap(item => item * 10))
