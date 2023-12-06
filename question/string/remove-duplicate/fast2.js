const str = 'hello world i am'
const removeDuplicate = str => {
  //   let result = str.split('')
  //   result = new Set(result)
  //   result = [...result].join('')
  //   return result
  return [...new Set(str.split(''))].join('')
}

console.log(removeDuplicate(str))
