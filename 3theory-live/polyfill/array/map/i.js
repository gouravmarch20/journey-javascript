const numbers = [1, 2, 3, 4, 5];

Array.prototype.map = function(callbackFunc){
    const newArr = []
    for(let i=0; i<this.length; i++){
        newArr.push(callbackFunc(this[i]))
    }
    return newArr;
}
const doubledNumbers = (val ) => val * 2
console.log(numbers.map(doubledNumbers)) // Output: [2, 4, 6, 8, 10]
