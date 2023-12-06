console.log('0')


let p = new Promise((resolve, reject) => {
  console.log('1')
  if (true) {
    resolve('dii')
    // reject('an error occur')
    console.log('2')
  }
})
console.log(' --- 3')
// ! handing promise run in async way
p.then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log('i will run no mater what '))

console.log(' --- 4')
