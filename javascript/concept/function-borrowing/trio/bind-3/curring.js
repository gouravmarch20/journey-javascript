function multiply(a, b) {
    return a * b;

}
let multiplyByTwo = multiply.bind(this, 2);
let multiplyByTen = multiply.bind(this, 10)
console.log(multiplyByTen(4))
console.log(multiplyByTwo(2))