// prime : 1 ,2 ,  3 ,5 => two factor one & itself sai divide
// composite : who have more than one factor
console.time('codestart')
let num = 9
isPrime = true
for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
        isPrime = false
        break
    }
}
if (isPrime) {
    console.log(num, 'is a prime no')
}

console.timeEnd('codestart')