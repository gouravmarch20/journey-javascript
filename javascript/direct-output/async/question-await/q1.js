//? tell the output
// l1 > await block rest even next code is async code

function resolveAfter2Seconds () {
  console.log('this is slow promise')
  return new Promise(resolve => {
    setTimeout(function () {
      resolve('slow')
      console.log('slow is promise')
    }, 2000)
  })
}
function resolveAfter1Seconds () {
  console.log('this is fast promise')
  return new Promise(resolve => {
    setTimeout(function () {
      resolve('fast')
      console.log('fast is promise done')
    }, 1000)
  })
}

async function fastAndSlow () {
  const slowResult = await resolveAfter2Seconds()
  console.log(slowResult)
  const fastResult = await resolveAfter1Seconds()
  console.log(fastResult)
}
fastAndSlow()
