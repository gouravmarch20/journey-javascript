function job1 (callback) {
  setTimeout(() => {
    callback('test 1')
  }, 2000)
}
function job2 (callback) {
  setTimeout(() => {
    callback('test 2')
  }, 4000)
}
// create callback hell , 
job1(function (data) {
  console.log(data)

  job2(function (data) {
    console.log(data)
  })
})
