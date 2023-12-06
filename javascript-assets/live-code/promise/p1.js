const job = p => {
  return new Promise((resolve, reject) => {
    if (typeof p !== 'number') {
      reject('not a number')
    } else if (p % 2 !== 0)
      setTimeout(reject, 2000, 'not a even number we reject  ')
    else if (p % 2 === 0) setTimeout(resolve, 1000, 'its a odd number ')
  })
}
job('4')
  .then(result => console.log(result))
  .catch(err => console.log(err))
job(6)
  .then(result => console.log(result))
  .catch(err => console.log(err))
job(5)
  .then(result => console.log(result))
  .catch(err => console.log(err))

// console.log(typeof 4);
