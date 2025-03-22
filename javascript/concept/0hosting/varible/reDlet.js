function test () {
  let a = 'hello'
  console.log(a)
  if (true) {
    let a = 'hii'// not overlapping it has scope on it block
    console.log(a)
  }
  console.log(a)
}
test()
