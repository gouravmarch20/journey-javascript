let result = 14
console.log(result)
setTimeout(() => {
  console.log(
    '---- this kind of issue  ----  varible need in complex operation && later required to modify',
    result
  )
}, 2000)
result = 43
console.log(result)
