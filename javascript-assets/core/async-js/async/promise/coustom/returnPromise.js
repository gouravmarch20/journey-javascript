
// promise constructor methord 
// resolve run after 2 sec , so it return its value
//.then we acess return value
const myPromise = a => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('promise resolved ')
      resolve(Number(a) + 7)
    }, 1000)
  })
}
myPromise('123').then(value => console.log('my promise --> ', value))
