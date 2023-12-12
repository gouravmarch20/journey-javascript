const num1 = 123423.3278
console.log(
  num1.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })
)
console.log(
  num1.toLocaleString('en-IN', {
    maximumSignificantDigits: 3,
    style: 'currency',
    currency: 'INR' //currency code
  })
)
