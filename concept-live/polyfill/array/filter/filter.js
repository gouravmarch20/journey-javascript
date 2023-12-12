const numbers = [1, 2, 3, 4, 5]

Array.prototype.filter = function (callbackFunc) {
  const newArr = []
  for (let i = 0; i < this.length; i++) {
    if (callbackFunc(this[i])) {
      newArr.push(i)
    }
  }
  return newArr
}

const  evenNumbers = (num) => {
    return num % 2 === 0;
  }

console.log(numbers.filter(evenNumbers)) 
